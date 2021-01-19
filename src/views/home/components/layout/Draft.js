import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SnapLeaflet from "./SnapLeaflet";

const Layout = ({ height, component, structure, blockType, dispatch }) => {
  useEffect(() => {
    setInitialLayout();
  }, []);

  const [contents, setContents] = useState([]);

  const setInitialLayout = () => {
    let layout = contents.slice();
    for (let i = 0; i < height.split("px")[0] / 50; i++) {
      layout = [
        ...layout,
        {
          content: [
            {
              active: false,
              content: <div>{i}</div>,
            },
          ],
        },
      ];
    }
    setContents(layout);
  };

  return (
    <section className="section-draft" style={{ height }}>
      <div>
        {contents &&
          contents.map((content, idx) => {
            return (
              <div
                key={idx}
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
                    {subcontent.content}
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
