import React, { Fragment, useEffect, useState } from "react";
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
    drop: (item, monitor) => console.log(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      background: monitor.isOver() ? "#e2e2e2" : null,
    }),
  });
  const onSetActive = (index) => {
    dispatch(setActive({ activeContent: index }));
  };

  const setColumns = (content) => (
    <Fragment>
      {content.columns.map((column, index) => (
        <td key={index} style={{ padding: "0 10px" }} ref={dropRef}>
          {column.rows.map((row, idx) => (
            <Fragment key={idx}>{setRows(row)}</Fragment>
          ))}
        </td>
      ))}
    </Fragment>
  );

  const setRows = (content) => (
    <Fragment>
      <div className="draft__contents" style={{ background }}>
        {content.content == null && (
          <Fragment>
            <Drop />
            <div>{DEFAULT_LEAF_VALUE}</div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );

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
            onMouseOver={() => dispatch(setHoverContent({ index: idx }))}
            onMouseLeave={() => dispatch(unsetHoverContent())}
          >
            {component.hoverContent === idx && <SnapLeaflet />}
            <div className={`draft__subBlockEvent`}>
              <table style={{ width: "100%" }}>
                {component.contents.map((content, idx) => (
                  <tbody key={idx}>
                    <tr>{setColumns(content)}</tr>
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
