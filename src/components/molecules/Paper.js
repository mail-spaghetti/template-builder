import React, { Fragment, useState } from "react";
import { SketchPicker } from "react-color";

import { BORDER_SETTINGS } from "../../pages/home/data";
import Input from "../atoms/Input";

import Text from "../atoms/Text";

const Paper = ({
  properties,
  className,
  onHandleInputChange,
  onHandleBorderChange,
  onHandleColor,
}) => {
  const [colorPopup, setColorPopup] = useState(false);

  const onSetFalse = (e) => {
    if (e.target.id === "paper") setColorPopup(false);
  };

  const onColorChange = (color) => onHandleColor(color.hex);

  const displayBorder = (border, currentBorder, index) => (
    <div
      onClick={() => onHandleBorderChange(border)}
      className={`paper__border paper--${border} ${
        currentBorder === border ? "paper__border--selected" : null
      }`}
      key={index}
    >
      &nbsp;
    </div>
  );

  const getPropertyPrinted = (value, index) => {
    switch (value) {
      case "link":
        return (
          <div key={index} className="paper__link">
            <div className="paper__link--icon">
              {require(`../../utils/icons/${properties[value].icon}`).default()}
            </div>
            <div className="paper__link--input">
              <Input
                value={properties[value].input}
                placeholder="https://"
                onInputChange={onHandleInputChange}
              />
            </div>
          </div>
        );
      case "color":
        return (
          <div
            onClick={() => setColorPopup(() => !colorPopup)}
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
        return (
          <Fragment key={index}>
            {properties[value].split(" ").map((property, idx) => {
              if (idx === 0)
                return (
                  <Text key={idx} className="paper__text" content={property} />
                );
              else if (idx === 1) {
                return (
                  <div key={idx} className="paper__borderWrapper">
                    {BORDER_SETTINGS.map((border, idx) =>
                      displayBorder(border, property, idx)
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
    <div className={`paper ${className}`} id="paper" onClick={onSetFalse}>
      {Object.keys(properties).map((property, idx) =>
        getPropertyPrinted(property, idx)
      )}
      {colorPopup && (
        <div className="paper__colorPicker">
          <SketchPicker color={properties.color} onChange={onColorChange} />
        </div>
      )}
    </div>
  );
};

export default Paper;
