import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import {
  addContent,
  setActiveContent,
  insertContent,
  setActive,
  setInactiveContent,
  setHoverContent,
  unsetHoverContent,
  setHoverSubcontent,
  unsetHoverSubcontent,
  insertContentBelow,
  insertContentAbove,
  deleteColumnContent,
  deleteContent,
} from "../../../../actions/components.action";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS } from "../../data";
import { getDefaultLeafValue } from "../../data/helper";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  const [{ isOver, background }, dropRef] = useDrop({
    accept: ITEMS.BLOCK,
    drop: (item, monitor) => {
      dropItem(item.content);
    },
    hover: (item, monitor) => {
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

  const [activeMainContent, setActiveMainContent] = useState(0);
  const [activeSubcontent, setActiveSubContent] = useState(0);
  const [rowIndex, setRowIndex] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  const [topClient, setTopClient] = useState(false);
  const [bottomClient, setBottomClient] = useState(false);
  const [mousePos, setMousePos] = useState(null);

  const ref = useRef(null);

  const getDropRef = (index) => {
    if (index === columnIndex) return dropRef;
  };

  const onSetActive = (index) => dispatch(setActive({ activeContent: index }));

  const onHandleHoverColumn = (index) => setActiveSubContent(index);

  const onHandleUnset = () => dispatch(unsetHoverContent());
  const handleDragLeave = () => {
    setTopClient(false);
    setBottomClient(false);
  };

  const onHandleDelete = (type, idx = null, index = null) =>
    type === "inner"
      ? dispatch(deleteColumnContent(0, index, idx))
      : dispatch(deleteContent(0));

  const dropItem = (item) => {
    if (
      component.contents[activeMainContent].columns[columnIndex].rows[rowIndex]
        ?.component
    ) {
      if (topClient)
        dispatch(
          insertContentAbove(item, activeMainContent, rowIndex, columnIndex)
        );
      else if (bottomClient)
        dispatch(
          insertContentBelow(item, activeMainContent, rowIndex, columnIndex)
        );
    } else
      dispatch(insertContent(item, activeMainContent, rowIndex, columnIndex));
    setTimeout(() => {
      setTopClient(false);
      setBottomClient(false);
    }, 150);
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

    dispatch(insertContent(content, activeSubcontent, rowIndex, columnIndex));
  };

  const setColumns = (content, activeIdx) => {
    return (
      <Fragment>
        {content.columns.map((column, index) => {
          return (
            <td
              key={index}
              style={{ padding: "0 10px" }}
              onDragOver={() => onHandleHoverColumn(index)}
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
                      {setRows(row, index, idx)}
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
            </td>
          );
        })}
      </Fragment>
    );
  };

  const setRows = (content, index, idx) => {
    return (
      <div ref={activeSubcontent === idx ? ref : null}>
        <div
          className={`draft__contents ${
            content.content ? "draft__contents--white" : null
          } ${
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
          style={{ background: index === activeSubcontent ? background : null }}
        >
          <div>
            {component.hoverSubcontent.rowIndex === idx &&
              component.hoverSubcontent.columnIndex === index && (
                <SnapLeaflet
                  _leaflet="inner"
                  onHandleDelete={(type) => onHandleDelete(type, index, idx)}
                />
              )}
            {setContent(content)}
          </div>
        </div>
      </div>
    );
  };

  const setContent = (content) => {
    const blocklayout = require("../../../../components/molecules/BlockLayout");
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
        if (mouseVal) {
          setTopClient(false);
          setBottomClient(true);
        } else if (!mouseVal) {
          setTopClient(true);
          setBottomClient(false);
        }
      }
    }, 150);
    dispatch(setHoverContent({ index: idx }));
  };

  return (
    <section className="section-draft" onDragLeave={handleDragLeave}>
      <div>
        {component.contents.map((content, idx) => (
          <div
            onMouseOver={() => dispatch(setHoverContent({ index: idx }))}
            onDragOver={() => dispatch(setHoverContent({ index: idx }))}
            onMouseLeave={onHandleUnset}
            key={idx}
            style={{ padding: `${structure.verticalPadding}px 50px` }}
            className={`draft__blockEvent ${
              component.hoverContent === idx ? "draft__blockEvent--hover" : null
            } ${content.active ? "draft__blockEvent--active" : null}`}
            onClick={() => onSetActive(idx)}
          >
            {component.hoverContent === idx && (
              <SnapLeaflet onHandleDelete={(type) => onHandleDelete(type)} />
            )}
            <div className={`draft__subBlockEvent`}>
              <table style={{ width: "100%" }}>
                {component.contents.map((content, index) => (
                  <tbody key={index}>
                    <tr>{setColumns(content, idx)}</tr>
                  </tbody>
                ))}
              </table>
            </div>
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
