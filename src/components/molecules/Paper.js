import React from "react";

import Text from "../atoms/Text";

const Paper = ({ properties }) => {
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
