import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import {
  addContent,
  setActiveContent,
  insertContent,
  setActiveSubContent,
  setActive,
  setInactiveContent,
  setHoverContent,
  unsetHoverContent,
  setHoverSubcontent,
  unsetHoverSubcontent,
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
      let hY = monitor.getClientOffset().y;
      setTimeout(() => {
        const dhY = monitor.getClientOffset().y - hY;
        if (dhY > 0) setMousePos(true);
        else if (dhY < 0) setMousePos(false);
      }, 0.15);
      setHoverClient(monitor.getClientOffset());
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      background: monitor.isOver() ? "#e2e2e2" : null,
    }),
  });

  const [activeSubcontent, setActiveSubContent] = useState(0);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [hoverClient, setHoverClient] = useState(null);
  const [topClient, setTopClient] = useState(false);
  const [bottomClient, setBottomClient] = useState(false);
  const [mousePos, setMousePos] = useState(null);

  const ref = useRef(null);

  const getDropRef = (index) => {
    if (index === activeSubcontent) return dropRef;
  };

  const onSetActive = (index) => dispatch(setActive({ activeContent: index }));

  const onHandleHoverColumn = (index) => setActiveSubContent(index);

  const onHandleUnset = () => dispatch(unsetHoverContent());
  const handleDragLeave = () => {
    setTopClient(false);
    setBottomClient(false);
  };

  const dropItem = (item) =>
    dispatch(insertContent(item, activeSubcontent, row, column));

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

    dispatch(insertContent(content, activeSubcontent, row, column));
  };

  const setColumns = (content, idx) => {
    return (
      <Fragment>
        {content.columns.map((column, index) => (
          <td
            key={index}
            style={{ padding: "0 10px" }}
            onDragOver={() => onHandleHoverColumn(index)}
            ref={getDropRef(index)}
          >
            {column.rows.map((row, idx) => (
              <Fragment key={idx}>
                <div
                  ref={activeSubcontent === idx ? ref : null}
                  onDragOver={(e) => setDragOverProps(e, idx)}
                  onDragLeave={()=>{
                    setTopClient(false);
                    setBottomClient(false);
                  }}
                >
                  {topClient && !!row.component && (
                    <div className="draft__contents--new">&nbsp;</div>
                  )}
                  {setRows(row, index, idx)}
                  {bottomClient && !!row.component && (
                    <div className="draft__contents--new">&nbsp;</div>
                  )}
                </div>
              </Fragment>
            ))}
          </td>
        ))}
      </Fragment>
    );
  };

  const setRows = (content, index, idx) => {
    return (
      <div>
        <div
          className={`draft__contents ${
            content.content ? "draft__contents--white" : null
          } ${
            component.hoverSubcontent.rowIndex === index &&
            component.hoverSubcontent.columnIndex === idx
              ? "draft__contents--green"
              : null
          }`}
          /*onDrop={() => console.log("")}*/
          onMouseOver={() =>
            dispatch(setHoverSubcontent({ rowIndex: index, columnIndex: idx }))
          }
          onMouseLeave={() => dispatch(unsetHoverSubcontent())}
          style={{ background: index === activeSubcontent ? background : null }}
        >
          <div>
            {component.hoverSubcontent.rowIndex === index &&
              component.hoverSubcontent.columnIndex === idx && (
                <SnapLeaflet _leaflet="inner" />
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
    const clientBox = ref.current.getBoundingClientRect();
    const mouseVal = mousePos;
    //  delay to prevent the jumping effect
    const middlePos = (clientBox.bottom - clientBox.top) / 2;
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
            {component.hoverContent === idx && <SnapLeaflet />}
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
