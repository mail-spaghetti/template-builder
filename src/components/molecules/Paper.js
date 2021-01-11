import React, { Fragment, useEffect } from "react";
import { BORDER_SETTINGS } from "../../views/home/data";

import Text from "../atoms/Text";

const Paper = ({ properties }) => {
  const displayBorder = (border, index) => {
    console.log(border, index);
    return (
      <div className={`paper__border paper--${border}`} key={index}>
        &nbsp;
      </div>
    );
  };
  const getPropertyPrinted = (value, index) => {
    switch (value) {
      case "color":
        return (
          <div
            key={index}
            className="paper__bgColor"
            style={{ background: properties[value] }}
          >
            &nbsp;
          </div>
        );
      case "text":
        return (
          <Text
            key={index}
            className="paper__text"
            content={properties[value]}
          />
        );
      case "border":
        console.log(properties[value]);
        return (
          <Fragment key={index}>
            {properties[value].split(" ").map((property, idx) => {
              if (idx === 0)
                return (
                  <Text key={idx} className="paper__text" content={property} />
                );
              else if (idx === 1) {
                return (
                  <div className="paper__borderWrapper">
                    {BORDER_SETTINGS.map((border, idx) =>
                      displayBorder(border, idx)
                    )}
                  </div>
                );
              }
            })}
          </Fragment>
        );
    }
  };
  return (
    <div className="paper">
      {Object.keys(properties).map((property, idx) =>
        getPropertyPrinted(property, idx)
      )}
    </div>
  );
};

export default Paper;
