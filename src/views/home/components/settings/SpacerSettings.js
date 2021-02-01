import React from "react";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import Knob from "../../../../components/organisms/Knob";
import { funcMap } from "../../data/helper";

const SpacerSettings = ({ type, component, dispatch }) => {
  console.log(type);
  const { height, background } = component?.contents[0]?.columns[
    component.activeRow.columnIndex
  ]?.rows[component.activeRow.rowIndex].value.properties;

  const onHandleHeight = (val) => dispatch(funcMap["height"](val));
  return (
    <div className="u-padding-light">
      <div className="row u-margin-bottom-none">
        <div className="col-1-of-2">
          <Text content="Background" />
          <Paper
            className="u-margin-top-light"
            properties={{
              color: "#FFFFFF",
              text: "#FFFFFF",
            }}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Height" />
          <Knob
            className="u-margin-top-light"
            content={`${height}px`}
            onHandleClick={onHandleHeight}
          />
        </div>
      </div>
      <HorizontalRule />
      <DisplaySlider />
    </div>
  );
};

export default SpacerSettings;
