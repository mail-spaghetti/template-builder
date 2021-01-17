import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDrop } from "react-dnd";

import { setActiveContent } from "../../../../actions/componentsAction";

import SnapLeaflet from "./SnapLeaflet";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS } from "../../data";

const Layout = ({ height, component, structure, dispatch }) => {
  useEffect(() => {
    setInitLayout();
  }, [component, structure]);

  useEffect(() => {
    setInitLayout();
  }, []);

  const [contents, setContents] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: ITEMS.BLOCK,
    drop: (item, monitor) => setNewLayout(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const onChangeActiveContent = (e, activeContent) => {
    if (e.target.className === "draft__blocks")
      dispatch(setActiveContent({ activeContent }));
  };

  const changeLayout = () => {};

  const setNewLayout = (layoutContent) => {
    const blocklayout = require("../../../../components/molecules/BlockLayout");
    let existingContents = contents.slice();
    existingContents = existingContents.map((content, idx) => {
      if (idx == component.activeContent - 1) {
        return {
          [idx]: {
            content: (
              <div
                key={idx}
                className="draft__blocks draft__blocks--active"
                style={{
                  minHeight: "12rem",
                  padding: "2.5rem 14rem",
                  position: "relative",
                }}
              >
                {addActiveSnap(blocklayout, layoutContent.content)}
              </div>
            ),
          },
        };
      }
      return content;
    });
    setContents(existingContents);
  };

  const setInitLayout = () => {
    let layout = [];
    for (let i = 0; i < parseInt(parseInt(height.split("px")) / 15); i++) {
      let content = null;
      if (component.activeContent === i + 1) {
        content = (
          <div
            key={i}
            className="draft__blocks draft__blocks--active"
            style={{
              minHeight: "12rem",
              padding: "1.5rem 14rem",
              position: "relative",
            }}
          >
            {addActiveSnap()}
          </div>
        );
      } else {
        content = (
          <div className="draft__blocks" style={{ height: "14rem" }}></div>
        );
      }

      layout = [
        ...layout,
        {
          [i]: {
            content,
          },
        },
      ];
    }
    setContents(layout);
  };

  const addActiveSnap = (Component = null, content) => {
    return (
      <Fragment>
        <SnapLeaflet />
        {Component ? (
          <tr
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {Array.from(Array(structure.columns), (e, i) => (
              <div style={{ width: "100%" }}>
                <div ref={dropRef} className="draft__dragContent">
                  <SnapLeaflet _leaflet="inner" />
                  <div onChange={onHandleTextChange}>
                    {Component.default(content.component)}
                  </div>
                </div>
              </div>
            ))}
          </tr>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {Array.from(Array(structure.columns), (e, i) => (
              <div
                style={{ width: "100%", marginLeft: "1rem" }}
                key={i}
                ref={dropRef}
              >
                <div className="draft__contents">
                  <div>
                    <Drop />
                  </div>
                  <div>{DEFAULT_LEAF_VALUE}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Fragment>
    );
  };

  const onHandleTextChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.value);
  };

  return (
    <section className="section-draft" style={{ height }}>
      <div>
        {contents &&
          contents.map((content, idx) => {
            return (
              <div
                key={idx}
                className="draft__blockEvent"
                onClick={(e) => onChangeActiveContent(e, idx + 1)}
              >
                {Object.values(content)[0].content}
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
});

export default connect(mapStateToProps)(Layout);
