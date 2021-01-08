import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Layout = ({ height, component }) => {
  useEffect(() => {
    setInitLayout();
  }, []);

  const [contents, setContents] = useState([]);

  const setInitLayout = () => {
    let layout = [];
    for (let i = 0; i < parseInt(parseInt(height.split("px")) / 15); i++) {
      layout = [
        ...layout,
        {
          [i]: {
            content: <div key={i} style={{height: "5rem"}}></div>,
          },
        },
      ];
    }
    setContents(layout);
  };
  return (
    <section className="section-draft" style={{ height }}>
      <div>
        {contents &&
          contents.map((content, idx) => Object.values(content)[0].content)}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  height: state.settings.height,
  component: state.component,
});

export default connect(mapStateToProps)(Layout);
