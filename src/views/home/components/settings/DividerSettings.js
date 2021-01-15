import React from "react";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import Slider from "../../../../components/molecules/Slider";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import Knob from "../../../../components/organisms/Knob";

const DividerSettings = () => (
  <div className="u-padding-light">
    <Text content="Style" />
    <Paper
      className="u-margin-top-light"
      properties={{
        color: "#000",
        text: "#D7D7D7",
        border: "1px solid #000",
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

export default DividerSettings;
