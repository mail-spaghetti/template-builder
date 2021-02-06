import React, { Fragment, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import {
  setActivateRow,
  setActive,
  setHoverContent,
  unsetHoverContent,
  setHoverSubcontent,
  unsetHoverSubcontent,
  deleteColumnContent,
  deleteContent,
  copyRowContent,
  insertItem,
  updateContent,
  setActiveRow,
  insertMainContent,
} from "../../../../actions/components.action";
import { setSelected, setType } from "../../../../actions/options.action";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS } from "../../data";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  const [{ isOver, background }, dropRef] = useDrop({
    accept: ITEMS.BLOCK,
    drop: (item, monitor) => {
      dropItem(item.content);
    },
    hover: (item, monitor) => {
      setHoverType("block");
      let hY = monitor.getClientOffset()?.y;
      setTimeout(() => {
        const dhY = monitor.getClientOffset()?.y - hY;
        if (dhY > 0) setMousePos(true);
        else if (dhY < 0) setMousePos(false);
      }, 0.15);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      background: monitor.isOver() ? "#e2e2e2" : null,
    }),
  });

  const [{ isOverStruct, backgroundStruct }, dropStructure] = useDrop({
    accept: ITEMS.STRUCTURE,
    drop: (item, monitor) => {
      dropContent(item.content);
    },
    hover: (item, monitor) => {
      if (!refStruct.current) return;
      setHoverType("struct");
      const hoveredRect = refStruct.current.getBoundingClientRect();
      const hoveredMiddle = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mouseYPosition = monitor.getClientOffset().y - hoveredRect.top;
      if (structClient.top || structClient.bottom) {
        setTimeout(() => {
          if (
            structClient.bottom &&
            mouseYPosition <=
              hoveredRect.height - structure.verticalPadding + 25 &&
            mouseYPosition > hoveredMiddle
          )
            setStructClient({ top: true, bottom: null });
          else if (
            structClient.top &&
            mouseYPosition >= 0 - structure.verticalPadding &&
            mouseYPosition < hoveredMiddle
          )
            setStructClient({ top: null, bottom: true });
        }, 150);
      } else {
        if (mouseYPosition >= hoveredMiddle)
          setStructClient(() => ({ top: null, bottom: true }));
        else setStructClient(() => ({ top: true, bottom: null }));
      }
    },
    collect: (monitor) => ({
      isOverStruct: monitor.isOver(),
      backgroundStruct: monitor.isOver() ? "#e2e2e2" : null,
    }),
  });

  const [activeMainContent, setActiveMainContent] = useState(0);
  const [activeSubcontent, setActiveSubContent] = useState(0);
  const [rowIndex, setRowIndex] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  const [topClient, setTopClient] = useState(false);
  const [bottomClient, setBottomClient] = useState(false);
  const [structClient, setStructClient] = useState({
    top: null,
    bottom: null,
  });
  const [mousePos, setMousePos] = useState(null);
  const [hoverType, setHoverType] = useState(null);

  const ref = useRef(null);
  const refStruct = useRef(null);

  const getDropRef = (index) => {
    if (hoverType === null) return dropRef;
    else if (index === columnIndex && hoverType === "block") return dropRef;
    else if (hoverType === "struct" || !hoverType) return dropRef;
  };

  const onSetActive = (index) => dispatch(setActive({ activeContent: index }));

  const onHandleHoverColumn = (e, index) => {
    return setActiveSubContent(index);
  };

  const onSetActiveRow = (mainIndex, index, idx) => {
    setRowIndex(idx);
    setColumnIndex(index);
    dispatch(setActiveRow(idx, index));
    dispatch(setActivateRow(mainIndex, idx, index));
  };

  const onHandleUnset = () => {
    setStructClient({ top: null, bottom: null });
    dispatch(unsetHoverContent());
  };

  const unSetClient = () => {
    setTimeout(() => {
      setStructClient({ top: null, bottom: null });
    }, 50);
  };

  const handleDragLeave = () => {
    setTopClient(false);
    setBottomClient(false);
  };

  const onHandleDelete = (type, idx = null, index = null) => {
    dispatch(setSelected({ selected: false }));
    type === "inner"
      ? dispatch(deleteColumnContent(0, index, idx))
      : dispatch(deleteContent(0));
  };

  const onHandleCopy = (type, idx = null, index = null) =>
    type === "inner" ? dispatch(copyRowContent(0, idx, index)) : null;

  const dropContent = (item) => {
    if (structClient.top) {
      dispatch(insertMainContent("above", component.hoverContent, item));
    } else if (structClient.bottom) {
      dispatch(insertMainContent("below", component.hoverContent, item));
    } else return;
  };

  const dropItem = (item) => {
    onSetActiveRow(component.hoverContent, rowIndex, columnIndex);
    if (
      component.contents[activeMainContent].columns[columnIndex].rows[rowIndex]
        ?.component
    ) {
      if (topClient)
        dispatch(
          insertItem("above", item, activeMainContent, rowIndex, columnIndex)
        );
      else if (bottomClient)
        dispatch(
          insertItem("below", item, activeMainContent, rowIndex, columnIndex)
        );
    } else {
      dispatch(
        insertItem(null, item, activeMainContent, rowIndex, columnIndex)
      );
    }
    setTimeout(() => {
      setTopClient(false);
      setBottomClient(false);
    }, 150);
    dispatch(setType({ type: item.icon }));
    dispatch(setSelected({ selected: true }));
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onHandleChange = async (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    let content = {};
    switch (type) {
      case "GIF":
        content = {
          type: "GIF",
          component: "Gif",
          value: await toBase64(e.dataTransfer.files[0]),
        };
        break;
      default:
        content = {
          type: "Text",
          component: "DraftText",
          value: e.target.innerHTML,
        };
    }

    dispatch(
      updateContent(content.value, activeSubcontent, rowIndex, columnIndex)
    );
  };

  const setColumns = (column, index, mainContentIndex) => {
    return (
      <Fragment>
        <div
          id="sub"
          style={{ padding: "0 10px" }}
          onDragOver={(e) => onHandleHoverColumn(e, index, ref)}
          ref={getDropRef(index)}
        >
          {column.rows.map((row, idx) => {
            return (
              <Fragment key={idx}>
                <div
                  onDragOver={(e) => {
                    if (rowIndex === idx) setDragOverProps(e, idx);
                  }}
                  onDragLeave={() => {
                    setTopClient(false);
                    setBottomClient(false);
                  }}
                  onMouseLeave={() => {
                    setTopClient(false);
                    setBottomClient(false);
                  }}
                >
                  {topClient &&
                    !!row.component &&
                    rowIndex === idx &&
                    columnIndex === index && (
                      <div className="draft__contents--new">&nbsp;</div>
                    )}
                  {setRows(row, index, idx, mainContentIndex)}
                  {bottomClient &&
                    rowIndex === idx &&
                    columnIndex === index &&
                    !!row.component && (
                      <div className="draft__contents--new">&nbsp;</div>
                    )}
                </div>
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  };

  const setRows = (content, index, idx, mainContentIndex) => {
    return (
      <div ref={activeSubcontent === idx ? ref : null}>
        <div
          className={`draft__contents ${
            content.content ? "draft__contents--white" : null
          } ${content.active ? "draft__contents--green" : null} ${
            component.hoverContent === mainContentIndex &&
            component.hoverSubcontent.rowIndex === idx &&
            component.hoverSubcontent.columnIndex === index
              ? "draft__contents--green"
              : null
          }`}
          onMouseOver={() =>
            dispatch(setHoverSubcontent({ rowIndex: idx, columnIndex: index }))
          }
          onDragOver={() => {
            setRowIndex(idx);
            setColumnIndex(index);
          }}
          onMouseLeave={() => dispatch(unsetHoverSubcontent())}
          onClick={onSetActiveRow.bind(this, component.hoverContent, index, idx)}
          style={{ background: index === activeSubcontent ? background : null }}
        >
          <div>
            {component.hoverContent === mainContentIndex &&
              component.hoverSubcontent.rowIndex === idx &&
              component.hoverSubcontent.columnIndex === index && (
                <SnapLeaflet
                  _leaflet="inner"
                  onHandleDelete={(type) => onHandleDelete(type, index, idx)}
                  onHandleCopy={(type) => onHandleCopy(type, index, idx)}
                />
              )}
            {setContent(content)}
          </div>
        </div>
      </div>
    );
  };

  const setContent = (content) => {
    const blocklayout = require("../../../../common/components/molecules/BlockLayout");
    switch (content.content) {
      case null:
        return (
          <Fragment>
            <Drop />
            <div>{DEFAULT_LEAF_VALUE}</div>
          </Fragment>
        );
      case content.content:
        return (
          <Fragment>
            {blocklayout.default(
              content.component,
              onHandleChange,
              content.value
            )}
          </Fragment>
        );
    }
  };

  const setDragOverProps = (e, idx) => {
    const mouseVal = mousePos;
    //  delay to prevent the jumping effect
    setTimeout(() => {
      const dMouseVal = mouseVal === mousePos;
      if (dMouseVal) {
        if (mouseVal && hoverType === "block") {
          setTopClient(false);
          setBottomClient(true);
        } else if (!mouseVal && hoverType === "block") {
          setTopClient(true);
          setBottomClient(false);
        }
      }
    }, 150);
    if (hoverType === "block") dispatch(setHoverContent({ index: idx }));
  };

  const setMainContentProps = (index) => {};

  return (
    <section className="section-draft" onDragLeave={handleDragLeave}>
      <div>
        {component.contents.map((content, idx) => (
          <div key={idx} ref={dropStructure} onDrop={unSetClient}>
            {structClient.top && (
              <div className="draft__subBlockEvent--top">&nbsp;</div>
            )}
            <div
              id="main"
              onMouseOver={() => dispatch(setHoverContent({ index: idx }))}
              onDragOver={() => {
                setMainContentProps(idx);
                dispatch(setHoverContent({ index: idx }));
              }}
              onMouseLeave={onHandleUnset}
              key={idx}
              style={{ padding: `${structure.verticalPadding}px 50px` }}
              className={`draft__blockEvent ${
                component.hoverContent === idx
                  ? "draft__blockEvent--hover"
                  : null
              } ${content.active ? "draft__blockEvent--active" : null}`}
              onClick={() => onSetActive(idx)}
            >
              {component.hoverContent === idx && (
                <SnapLeaflet onHandleDelete={(type) => onHandleDelete(type)} />
              )}
              <div className={`draft__subBlockEvent`}>
                <table style={{ width: "100%" }} ref={refStruct}>
                  <tbody id="main">
                    <tr>
                      {content.columns.map((content, index) => (
                        <th width={`${content.width}%`} key={index}>
                          {setColumns(content, index, idx)}
                        </th>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {structClient.bottom && (
              <div className="draft__subBlockEvent--bottom">&nbsp;</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  height: state.settings.height,
  component: state.component,
  structure: state.structure,
  blockType: state.option.type?.toLowerCase(),
});

export default connect(mapStateToProps)(Layout);
