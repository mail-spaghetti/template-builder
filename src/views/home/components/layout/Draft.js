import React, { Fragment, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import {
  addContent,
  setActiveContent,
  insertContent,
  setActiveSubContent,
} from "../../../../actions/components.action";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE, ITEMS } from "../../data";
import { getDefaultLeafValue } from "../../data/helper";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  useEffect(() => {
    setInitialLayout();
  }, []);

  const [hoverIndex, setHoverIndex] = useState(0);

  const [{ isOver }, dropRef] = useDrop({
    accept: ITEMS.BLOCK,
    drop: (item, monitor) => insertBlock(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const insertBlock = (item) => {
    dispatch(insertContent(item, component.activeContent, hoverIndex));
    dispatch(setActiveSubContent({ activeSubcontent: hoverIndex + 1 }));
  };

  const onChangeActiveContent = (index) => {
    dispatch(setActiveContent({ activeContent: index + 1 }));
    dispatch(setActiveSubContent({ activeSubcontent: null }));
  };

  const setInitialLayout = () => {
    let layout = [];
    for (let i = 0; i < height.split("px")[0] / 50; i++) {
      layout = [
        ...layout,
        {
          content: [getDefaultLeafValue()],
        },
      ];
    }
    dispatch(addContent(layout));
  };

  const getDropRef = (index) => {
    if (index == hoverIndex) return dropRef;
  };

  const iterateSubcomponent = (idx, index, content) => {
    if (idx + 1 === component.activeContent)
      return (
        <Fragment key={index}>
          <div ref={getDropRef(index)} onDragOver={() => setHoverIndex(index)}>
            {getLeafContent(content, index)}
          </div>
        </Fragment>
      );
  };

  const getLeafContent = (content, index) => {
    const blocklayout = require("../../../../components/molecules/BlockLayout");
    switch (content.content[index].type) {
      case "default":
        return (
          <Fragment>
            <div className="draft__contents">
              <Drop />
              <div>{DEFAULT_LEAF_VALUE}</div>
            </div>
          </Fragment>
        );
      case "Text":
        return <Fragment>{blocklayout.default("DraftText")}</Fragment>;
    }
  };

  return (
    <section className="section-draft">
      <div>
        {component.contents.map((content, idx) => {
          return (
            <div
              key={idx}
              onClick={() => onChangeActiveContent(idx)}
              className={`draft__blockEvent ${
                component.activeContent == idx + 1
                  ? "draft__blockEvent--active"
                  : null
              }`}
            >
              {component.activeContent == idx + 1 && <SnapLeaflet />}
              <div className="draft__subBlocks">
                {content.content.map((subcontent, index) => {
                  return (
                    <div
                      key={index}
                      className={`draft__subBlockEvent ${
                        component.activeContent == idx + 1 &&
                        component.activeSubcontent == index + 1
                          ? "draft__subBlockEvent--active"
                          : null
                      }`}
                    >
                      {component.activeContent == idx + 1 &&
                        component.activeSubcontent == index + 1 && (
                          <SnapLeaflet _leaflet="inner" />
                        )}
                      {iterateSubcomponent(idx, index, content)}
                    </div>
                  );
                })}
              </div>
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
