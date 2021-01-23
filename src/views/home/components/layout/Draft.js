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
} from "../../../../actions/components.action";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS } from "../../data";
import { getDefaultLeafValue } from "../../data/helper";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  const [{ isOver, background }, dropRef] = useDrop({
    accept: ITEMS.BLOCK,
    drop: (item, monitor) => dropItem(item.content.text),
    hover: (item, monitor) => setHoverClient(monitor.getClientOffset()),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      background: monitor.isOver() ? "#e2e2e2" : null,
    }),
  });

  const [activeSubcontent, setActiveSubContent] = useState(0);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [hoverClient, setHoverClient] = useState(null);

  const ref = useRef(null);

  const getDropRef = (index) => {
    if (index === activeSubcontent) return dropRef;
  };

  const onSetActive = (index) => dispatch(setActive({ activeContent: index }));

  const onHandleHoverColumn = (index) => setActiveSubContent(index);

  const dropItem = (item) =>
    dispatch(insertContent(item, activeSubcontent, row, column));

  const onHandleChange = (e) => {
    const content = {
      type: "Text",
      data: e.target.innerHTML,
    };
    dispatch(insertContent(content, component.activeContent, activeSubcontent));
  };

  const setColumns = (content, idx) => (
    <Fragment>
      {content.columns.map((column, index) => (
        <td
          key={index}
          style={{ padding: "0 10px" }}
          onDragOver={() => onHandleHoverColumn(index)}
          ref={getDropRef(index)}
        >
          {column.rows.map((row, idx) => (
            <Fragment key={idx}>{setRows(row, index, idx)}</Fragment>
          ))}
        </td>
      ))}
    </Fragment>
  );

  const setRows = (content, index, idx) => (
    <Fragment>
      <div
        ref={activeSubcontent === index ? ref : null}
        className={`draft__contents ${
          content.content ? "draft__contents--white" : null
        }`}
        onMouseOver={() => dispatch(setHoverContent({ index: idx }))}
        onDragOver={(e) => setDragOverProps(e, idx)}
        onMouseLeave={() => dispatch(unsetHoverContent())}
        style={{ background: index === activeSubcontent ? background : null }}
      >
        {setContent(content)}
      </div>
    </Fragment>
  );

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
      case "TEXT":
        return (
          <Fragment>
            {blocklayout.default("DraftText", onHandleChange, content.value)}
          </Fragment>
        );
    }
  };

  const setDragOverProps = (e, idx) => {
    console.log(ref.current.getBoundingClientRect());
    const clientBox = ref.current.getBoundingClientRect();
    const boxHeight = clientBox.bottom - clientBox.top;
    dispatch(setHoverContent({ index: idx }));
  };

  return (
    <section className="section-draft">
      <div>
        {component.contents.map((content, idx) => (
          <div
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
