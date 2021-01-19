import React, { Children, Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDrop } from "react-dnd";

import { setActiveContent } from "../../../../actions/components.action";

import SnapLeaflet from "./SnapLeaflet";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS, DEFAULT_STYLE } from "../../data";
import { setSelected, setType } from "../../../../actions/options.action";

const Layout = ({ height, component, structure, dispatch }) => {
  useEffect(() => {
    changeLayout();
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

  const emptyBlock = () => (
    <div className="draft__blocks" style={{ height: "14rem" }}></div>
  );

  const activeBlock = (index, block = null, content = null) => (
    <div
      key={index}
      className="draft__blocks draft__blocks--active"
      style={DEFAULT_STYLE}
    >
      {addActiveSnap(block, content)}
    </div>
  );

  const onChangeActiveContent = (e, activeContent) =>
    e.target.className === "draft__blocks" &&
    dispatch(setActiveContent({ activeContent }));

  const changeLayout = () => {
    let existingContents = contents.slice();
    existingContents = existingContents.map((content, idx) => {
      if (idx == component.activeContent - 1) {
        return {
          [idx]: {
            content: activeBlock(idx),
          },
        };
      }

      const ol = Object.values(content)[0].content;

      let iter = null;
      (function fn(children) {
        Children.map(children, (child) => {
          if (child.props?.id == "empty_block") {
            iter = {
              id: child.props.id,
              child,
            };
          }
          if (child?.props?.id == "blocks")
            iter = { id: child.props.id, child };
          if (child?.props?.children) fn(child.props.children);
        });
      })(ol);
      if (iter?.id == "blocks")
        return {
          [idx]: {
            content: <div style={DEFAULT_STYLE}>{iter.child}</div>,
          },
        };
      else if (iter?.id == "empty_block")
        return {
          [idx]: {
            content: emptyBlock(),
          },
        };
      return content;
    });
    setContents(existingContents);
  };

  const setNewLayout = (layoutContent) => {
    const type = layoutContent.content.text;
    dispatch(
      setType({ type: type[0].toUpperCase() + type.substring(1).toLowerCase() })
    );
    dispatch(setSelected({ selected: true }));
    const blocklayout = require("../../../../components/molecules/BlockLayout");
    let existingContents = contents.slice();
    existingContents = existingContents.map((content, idx) => {
      if (idx == component.activeContent - 1) {
        return {
          [idx]: {
            content: activeBlock(idx, blocklayout, layoutContent.content),
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
      if (component.activeContent === i + 1) content = activeBlock(i);
      else content = emptyBlock();

      layout = [
        ...layout,
        {
          [i]: { content },
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
                  <div className="el" onChange={onHandleTextChange}>
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
                id="empty_block"
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
