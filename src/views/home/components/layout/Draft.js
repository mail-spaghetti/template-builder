import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  addContent,
  setActiveContent,
} from "../../../../actions/components.action";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE } from "../../data";
import { getDefaultLeafValue } from "../../data/helper";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  useEffect(() => {
    setInitialLayout();
  }, []);

  const [contents, setContents] = useState([]);

  const onChangeActiveContent = (index) =>
    dispatch(setActiveContent({ activeContent: index + 1 }));

  const setInitialLayout = () => {
    let layout = contents.slice();
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

  const iterateSubcomponent = (idx, index, content) => {
    if (idx + 1 === component.activeContent)
      return (
        <Fragment key={index}>
          <div className="draft__contents">
            <Drop />
            <div>{DEFAULT_LEAF_VALUE}</div>
          </div>
        </Fragment>
      );
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
                  console.log("s", subcontent, index);
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
