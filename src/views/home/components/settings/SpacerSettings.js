import React from "react";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import Knob from "../../../../components/organisms/Knob";

const SpacerSettings = () => (
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
        <Knob className="u-margin-top-light" />
      </div>
    </div>
    <HorizontalRule />
    <DisplaySlider />
  </div>
);

export default SpacerSettings;
