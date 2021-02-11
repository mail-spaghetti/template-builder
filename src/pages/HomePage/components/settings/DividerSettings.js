import React from "react";

import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Paper from "../../../../common/components/molecules/Paper";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import Knob from "../../../../common/components/organisms/Knob";

import { funcMap } from "../../data/helper";

const DividerSettings = ({ type, component, dispatch }) => {
  const { contentIndex, columnIndex, rowIndex } = component.currentActiveBlock;
  const {
    borderTop,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  } = component?.contents[contentIndex]?.columns[columnIndex]?.rows[
    rowIndex
  ].value.properties;
  const onHandleBorder = (val, type, prop) => {
    let borderArr = borderTop.split(" ");
    if (type === "color") borderArr.splice(2, 1, val);
    else if (type === "type") borderArr.splice(1, 1, val);
    dispatch(funcMap[prop](borderArr.join(" ")));
  };

  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value));

  return (
    <div className="u-padding-light">
      <Text content="Style" />
      <Paper
        className="u-margin-top-light"
        onHandleColor={(val) => onHandleBorder(val, "color", "borderTop")}
        onHandleBorderChange={(val) => onHandleBorder(val, "type", "borderTop")}
        properties={{
          color: borderTop?.split(" ")[2],
          text: borderTop?.split(" ")[2],
          border: borderTop,
        }}
      />
      <HorizontalRule />
      <Text content="Margin" className="settings__heading" />
      <div className="row u-margin-top-small u-margin-bottom-none">
        <div className="col-1-of-2">
          <Text content="Top & Bottom" />
          <Knob
            content={marginTop}
            className="u-margin-top-light"
            onHandleClick={(val) => onHandleMarginSet(val, "vertical")}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Left & Right" />
          <Knob
            content={marginLeft}
            className="u-margin-top-light"
            onHandleClick={(val) => onHandleMarginSet(val, "horizontal")}
          />
        </div>
      </div>
      <HorizontalRule />
      <DisplaySlider />
    </div>
  );
};

export default DividerSettings;
