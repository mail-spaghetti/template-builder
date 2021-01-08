import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import Add from "../../../../utils/icons/Add";
import Copy from "../../../../utils/icons/Copy";
import Delete from "../../../../utils/icons/Delete";
import Drop from "../../../../utils/icons/Drop";
import Move from "../../../../utils/icons/Move";

const Layout = ({ height, component }) => {
  useEffect(() => {
    setInitLayout();
  }, []);

  const [contents, setContents] = useState([]);

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
              height: "14rem",
              padding: "2.5rem 14rem",
              position: "relative",
            }}
          >
            {addActiveSnap()}
          </div>
        );
      } else {
        content = (
          <div
            key={i}
            className="draft__blocks"
            style={{ height: "14rem" }}
          ></div>
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

  const addActiveSnap = () => (
    <Fragment>
      <div className="draft__snap draft__snap--1">
        <span>
          <Add />
        </span>
        <span>
          <Delete />
        </span>
      </div>
      <div className="draft__snap draft__snap--2">
        <span>
          <Add />
        </span>
        <span>
          <Move />
        </span>
      </div>
      <div className="draft__snap draft__snap--3">
        <span>
          <Copy />
        </span>
      </div>
      <div className="draft__contents">
        <div>
          <Drop />
        </div>
        <div>Drop content here</div>
      </div>
    </Fragment>
  );
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
