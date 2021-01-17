import React, { Fragment, useEffect, useState } from "react";

import Text from "../atoms/Text";

const Cards = ({ type = "card", ...rest }) => {
  const [component, setComponent] = useState(null);
  useEffect(() => {
    if (icon) {
      const Components = require(`../../utils/icons/${icon}.js`);
      setComponent(Components.default);
    }
  }, []);

  const { text, icon, struct } = rest;
  return (
    <Fragment>
      {type === "card" ? (
        <div className="card">
          {component && <span>{component}</span>}
          {text && <Text content={text} />}
        </div>
      ) : (
        <div className="card card__struct">
          <div className="row">
            {struct.columns.map((column, idx) => (
              <div key={idx} className={`col-${column}-of-${struct.parts} card__struct--block`}>
                &nbsp;
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cards;
