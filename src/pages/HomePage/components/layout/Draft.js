import React, { Fragment, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import {
  deleteColumnContent,
  deleteContent,
  copyRowContent,
  insertItem,
  updateContent,
  insertMainContent,
  setCurrentActiveBlock,
} from "../../../../actions/componentsAction";
import {
  changeSelection,
  setSelected,
  setType,
} from "../../../../actions/optionsAction";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS, OPTIONS } from "../../data";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  // Draft States
  const [hoverType, setHoverType] = useState(null);
  const [structClient, setStructClient] = useState({
    top: null,
    bottom: null,
  });
  const [rowClient, setRowClient] = useState({
    top: null,
    bottom: null,
  });
  const [dragPosition, setDragPosition] = useState({
    contentIndex: null,
    columnIndex: null,
    rowIndex: null,
  });

  const [hoverElements, setHoverElements] = useState({
    contentIndex: null,
    columnIndex: null,
    rowIndex: null,
  });

  const [activeElements, setActiveElements] = useState({
    contentIndex: null,
    columnIndex: null,
    rowIndex: null,
  });

  const ref = useRef(null);
  const refStruct = useRef(null);
  const [{ isOver, background }, dropRef] = useDrop({
    accept: ITEMS.BLOCK,
    drop: (item, monitor) => {
      dropItem(item.content);
      setRowClient(() => ({ top: null, bottom: null }));
      setTimeout(() => {
        setRowClient(() => ({ top: null, bottom: null }));
        setDragPosition(() => ({
          contentIndex: null,
          columnIndex: null,
          rowIndex: null,
        }));
      }, 200);
    },
    hover: (item, monitor) => {
      if (!ref.current) return;
      const hoveredRect = ref.current.getBoundingClientRect();
      const hoveredMiddle = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mouseYPosition = monitor.getClientOffset().y - hoveredRect.top;
      if (rowClient.top || rowClient.bottom) {
        setTimeout(() => {
          if (
            rowClient.bottom &&
            mouseYPosition <= hoveredRect.height &&
            mouseYPosition > hoveredMiddle
          )
            setRowClient({ top: true, bottom: null });
          else if (
            rowClient.top &&
            mouseYPosition >= 0 - 88 &&
            mouseYPosition < hoveredMiddle
          )
            setRowClient({ top: null, bottom: true });
        }, 150);
      } else {
        if (mouseYPosition >= hoveredMiddle)
          setRowClient(() => ({ top: null, bottom: true }));
        else setRowClient(() => ({ top: true, bottom: null }));
      }
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
      setStructClient(() => ({ top: null, bottom: null }));
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

  const onHandleDelete = (type, idx = null, index = null) => {
    dispatch(setSelected({ selected: false }));
    type === "inner"
      ? dispatch(deleteColumnContent(0, index, idx))
      : dispatch(deleteContent(0));
  };

  const onHandleCopy = (type, idx = null, index = null) =>
    type === "inner" ? dispatch(copyRowContent(0, idx, index)) : null;

  const setDragOverProps = (contentIndex, columnIndex, rowIndex) =>
    setDragPosition({ contentIndex, columnIndex, rowIndex });

  const dropContent = (item) => {
    if (structClient.top) {
      dispatch(insertMainContent("above", dragPosition.contentIndex, item));
    } else if (structClient.bottom) {
      dispatch(insertMainContent("below", dragPosition.contentIndex, item));
    } else return;
  };

  const dropItem = (item) => {
    const { contentIndex, columnIndex, rowIndex } = dragPosition;
    if (
      component.contents[contentIndex].columns[columnIndex].rows[rowIndex]
        ?.component
    ) {
      dispatch(
        insertItem(
          (() => {
            if (rowClient.top) return "above";
            else if (rowClient.bottom) return "below";
          })(),
          item,
          contentIndex,
          rowIndex,
          columnIndex
        )
      );
    } else {
      dispatch(insertItem(null, item, contentIndex, rowIndex, columnIndex));
    }
  };

  const setHoverContent = (contentIndex, type) => {
    if (type) setHoverElements((prevState) => ({ ...prevState, contentIndex }));
    else
      setHoverElements((prevState) => ({ ...prevState, contentIndex: null }));
  };

  const setHoverRowContent = (contentIndex, columnIndex, rowIndex, type) => {
    if (type) setHoverElements({ contentIndex, columnIndex, rowIndex });
    else
      setHoverElements({
        contentIndex: null,
        columnIndex: null,
        rowIndex: null,
      });
  };

  const setActiveContent = (e, contentIndex) => {
    if (e.target.id !== "block") {
      dispatch(
        setCurrentActiveBlock({
          contentIndex,
          columnIndex: null,
          rowIndex: null,
        })
      );
      setActiveElements((prevState) => ({ ...prevState, contentIndex }));
      dispatch(changeSelection({ selection: OPTIONS[1] }));
      dispatch(setType({ type: OPTIONS[1] }));
      dispatch(setSelected({ selected: true }));
    }
  };

  const setTextFormat = (text) =>
    text[0].toUpperCase() + text.substring(1).toLowerCase();

  const activateRow = (e, contentIndex, columnIndex, rowIndex, item) => {
    if (e.target.id === "block") {
      setActiveRowContent(contentIndex, columnIndex, rowIndex);
      dispatch(setCurrentActiveBlock({ contentIndex, columnIndex, rowIndex }));
      dispatch(setType({ type: OPTIONS[0] }));
      dispatch(setType({ type: setTextFormat(item.content) }));
      dispatch(setSelected({ selected: true }));
    }
  };

  const setActiveRowContent = (contentIndex, columnIndex, rowIndex) =>
    setActiveElements(() => ({ contentIndex, columnIndex, rowIndex }));

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

    // dispatch(
    //   updateContent(content.value, activeSubcontent, rowIndex, columnIndex)
    // );
  };

  const getDropRef = (contentIndex, columnIndex, rowIndex) => {
    if (
      dragPosition.contentIndex === contentIndex &&
      dragPosition.columnIndex === columnIndex &&
      dragPosition.rowIndex === rowIndex
    )
      return dropRef;
  };

  const getStructRef = (contentIndex) => {
    if (dragPosition.contentIndex === contentIndex) return dropStructure;
  };

  const setColumns = (column, contentIndex, index) => {
    return (
      <Fragment>
        <div id="sub" style={{ padding: "0 10px" }}>
          {column.rows.map((row, idx) => {
            return (
              <Fragment key={idx}>
                <div ref={getDropRef(contentIndex, index, idx)}>
                  {rowClient.top &&
                    dragPosition.contentIndex === contentIndex &&
                    dragPosition.columnIndex === index &&
                    dragPosition.rowIndex === idx &&
                    !!row.component && (
                      <div className="draft__contents--new">&nbsp;</div>
                    )}
                  {setRows(row, index, idx, contentIndex)}
                  {rowClient.bottom &&
                    dragPosition.contentIndex === contentIndex &&
                    dragPosition.columnIndex === index &&
                    dragPosition.rowIndex === idx &&
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

  const setRows = (content, index, idx, contentIndex) => {
    return (
      <div
        onMouseOver={setHoverRowContent.bind(
          this,
          contentIndex,
          index,
          idx,
          true
        )}
        onMouseOut={setHoverRowContent.bind(
          this,
          contentIndex,
          index,
          idx,
          false
        )}
        onClick={(e) => activateRow(e, contentIndex, index, idx, content)}
        onDragOver={setDragOverProps.bind(this, contentIndex, index, idx)}
        ref={ref}
        id="block"
        className={`draft__contents ${
          content.content ? "draft__contents--white" : null
        } ${
          hoverElements.contentIndex === contentIndex &&
          hoverElements.rowIndex === idx &&
          hoverElements.columnIndex === index
            ? "draft__contents--green"
            : null
        } ${
          !!content.component &&
          activeElements.contentIndex === contentIndex &&
          activeElements.columnIndex === index &&
          activeElements.rowIndex === idx
            ? "draft__contents--active"
            : null
        }`}
        style={{
          background:
            contentIndex === dragPosition.contentIndex &&
            index === dragPosition.columnIndex &&
            idx === dragPosition.rowIndex
              ? background
              : null,
        }}
      >
        <div>
          {hoverElements.contentIndex === contentIndex &&
            hoverElements.rowIndex === idx &&
            hoverElements.columnIndex === index && (
              <SnapLeaflet
                _leaflet="inner"
                onHandleDelete={(type) => onHandleDelete(type, index, idx)}
                onHandleCopy={(type) => onHandleCopy(type, index, idx)}
              />
            )}
          {setContent(content)}
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

  return (
    <section className="section-draft">
      <div>
        {component.contents.map((content, idx) => {
          return (
            <div
              key={idx}
              ref={getStructRef(idx)}
              onMouseOver={() => {
                setHoverContent(idx, true);
                setRowClient({ top: null, bottom: null });
              }}
              id="main"
              onMouseOut={setHoverContent.bind(this, idx, false)}
              onClick={(e) => setActiveContent(e, idx)}
            >
              {structClient.top && dragPosition.contentIndex === idx && (
                <div className="draft__subBlockEvent--top">&nbsp;</div>
              )}
              <div
                key={idx}
                style={{
                  padding: `${content.verticalPadding}px 50px`,
                  background: `${content.background}`,
                }}
                className={`draft__blockEvent ${
                  hoverElements.contentIndex === idx
                    ? "draft__blockEvent--hover"
                    : null
                } ${
                  activeElements.contentIndex === idx
                    ? "draft__blockEvent--active"
                    : null
                }`}
              >
                {hoverElements.contentIndex === idx && (
                  <SnapLeaflet
                    onHandleDelete={(type) => onHandleDelete(type)}
                  />
                )}
                <div className={`draft__subBlockEvent`}>
                  <table
                    style={{
                      width: "100%",
                      borderTop: content.borderTop,
                      borderBottom: content.borderBottom,
                      borderRight: content.borderRight,
                      borderLeft: content.borderLeft,
                    }}
                    ref={refStruct}
                  >
                    <tbody>
                      <tr>
                        {content.columns.map((content, index) => (
                          <th
                            width={`${content.width}%`}
                            style={{
                              overflow: "hidden",
                              background: content.background,
                              borderTop: content.borderTop,
                              borderBottom: content.borderBottom,
                              borderLeft: content.borderLeft,
                              borderRight: content.borderRight,
                              borderRadius: content.borderRadius,
                              paddingTop: content.marginTop,
                              paddingBottom: content.marginBottom,
                              paddingRight: content.marginRight,
                              paddingLeft: content.marginLeft,
                            }}
                            key={index}
                          >
                            {setColumns(content, idx, index)}
                          </th>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {structClient.bottom && dragPosition.contentIndex === idx && (
                <div className="draft__subBlockEvent--bottom">&nbsp;</div>
              )}
            </div>
          );
        })}
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
