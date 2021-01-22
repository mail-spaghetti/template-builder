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
  const onSetActive = (index) => {
    dispatch(setActive({ activeContent: index }));
  };
  return (
    <section className="section-draft">
      <div>
        {component.contents.map((content, idx) => (
          <div
            key={idx}
            style={{ padding: `${structure.verticalPadding}px 14rem` }}
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
                    <tr>
                      {content.columns.map((column, index) => (
                        <td key={index}>
                          <div className="draft__contents">
                            <Drop />
                            <div>{DEFAULT_LEAF_VALUE}</div>
                          </div>
                        </td>
                      ))}
                    </tr>
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
