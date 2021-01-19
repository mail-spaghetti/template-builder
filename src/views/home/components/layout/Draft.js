import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { addContent, setActiveContent } from "../../../../actions/components.action";
import Drop from "../../../../utils/icons/Drop";
import { DEFAULT_LEAF_VALUE } from "../../data";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  useEffect(() => {
    setInitialLayout();
  }, []);

  useEffect(()=>{
    changeStructure();
  }, [structure])

  const [contents, setContents] = useState([]);

  const onChangeActiveContent = (index) =>
    dispatch(setActiveContent({ activeContent: index + 1 }));

  const changeStructure = () => {
    
  }

  const setInitialLayout = () => {
    let layout = contents.slice();
    for (let i = 0; i < height.split("px")[0] / 50; i++) {
      layout = [
        ...layout,
        {
          content: [
            {
              type: "default",
              content: <div>Drop Content Here</div>,
            },
          ],
        },
      ];
    }
    dispatch(addContent(layout))
  };

  const iterateSubcomponent = (idx, index, content) => {
    console.log(idx, index, content.content);
    let jsx = null;
    if (idx + 1 === component.activeContent) {
      jsx = content.content.map((subcontent, loops) => (
        <Fragment key={loops}>
          <div className="draft__contents">
            <Drop />
            <div>{DEFAULT_LEAF_VALUE}</div>
          </div>
        </Fragment>
      ));
    }
    return <div>{jsx}</div>;
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
            {content.content.map((subcontent, index) => (
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
            ))}
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
