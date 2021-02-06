import React from "react";

import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Paper from "../../../../common/components/molecules/Paper";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import Knob from "../../../../common/components/organisms/Knob";

import { funcMap } from "../../data/helper";

const SpacerSettings = ({ type, component, dispatch }) => {
  const { height, background } = component?.contents[0]?.columns[
    component.activeRow.columnIndex
  ]?.rows[component.activeRow.rowIndex].value.properties;

  const onHandleProperties = (val, prop) => dispatch(funcMap[prop](val));
  return (
    <div className="u-padding-light">
      <div className="row u-margin-bottom-none">
        <div className="col-1-of-2">
          <Text content="Background" />
          <Paper
            className="u-margin-top-light"
            onHandleColor={(val)=>onHandleProperties(val, 'background')}
            properties={{
              color: background,
              text: background,
            }}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Height" />
          <Knob
            className="u-margin-top-light"
            content={`${height}px`}
            onHandleClick={(val) => onHandleProperties(val, "height")}
          />
        </div>
      </div>
      <HorizontalRule />
      <DisplaySlider />
    </div>
  );
};

export default SpacerSettings;
