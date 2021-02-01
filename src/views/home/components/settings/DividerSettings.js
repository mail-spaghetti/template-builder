import React from "react";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import Slider from "../../../../components/molecules/Slider";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import Knob from "../../../../components/organisms/Knob";
import { funcMap } from "../../data/helper";

const DividerSettings = ({ type, component, dispatch }) => {
  const {
    borderTop,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  } = component?.contents[0]?.columns[component.activeRow.columnIndex]?.rows[
    component.activeRow.rowIndex
  ].value.properties;

  const onHandleBorder = (val, type, prop) => {
    let borderArr = borderTop.split(" ");
    if (type === "color") borderArr.splice(2, 1, val);
    else if (type === "type") borderArr.splice(1, 1, val);
    dispatch(funcMap[prop](borderArr.join(" ")));
  };

  return (
    <div className="u-padding-light">
      <Text content="Style" />
      <Paper
        className="u-margin-top-light"
        onHandleColor={(val) => onHandleBorder(val, "color", "borderTop")}
        onHandleBorderChange={(val) => onHandleBorder(val, "type", "borderTop")}
        properties={{
          color: borderTop.split(" ")[2],
          text: borderTop.split(" ")[2],
          border: borderTop,
        }}
      />
      <HorizontalRule />
      <Text content="Margin" className="settings__heading" />
      <div className="row u-margin-top-small u-margin-bottom-none">
        <div className="col-1-of-2">
          <Text content="Top & Bottom" />
          <Knob className="u-margin-top-light" />
        </div>
        <div className="col-1-of-2">
          <Text content="Left & Right" />
          <Knob className="u-margin-top-light" />
        </div>
      </div>
      <HorizontalRule />
      <DisplaySlider />
    </div>
  );
};

export default DividerSettings;
