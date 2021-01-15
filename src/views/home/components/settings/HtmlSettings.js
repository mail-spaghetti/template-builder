import React from "react";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Slider from "../../../../components/molecules/Slider";
import Knob from "../../../../components/organisms/Knob";

const HtmlSettings = () => (
  <div className="u-padding-light">
    <Text content="Margin" className="settings__heading" />
    <div className="row u-margin-bottom-none">
      <div className="col-1-of-2">
        <Text content="Margin Top" />
        <Knob className="u-margin-top-x-light" />
      </div>
      <div className="col-1-of-2">
        <Text content="Margin Bottom" />
        <Knob className="u-margin-top-x-light" />
      </div>
    </div>
    <div className="row u-margin-bottom-none u-margin-top-light">
      <div className="col-1-of-2">
        <Text content="Margin Left" />
        <Knob className="u-margin-top-x-light" />
      </div>
      <div className="col-1-of-2">
        <Text content="Margin Right" />
        <Knob className="u-margin-top-x-light" />
      </div>
    </div>
    <HorizontalRule />
    <div className="u-display-flex u-display-flex--2">
      <div>
        <Slider />
      </div>
      <div>
        <Text content="Hide on mobile" />
      </div>
    </div>
    <div className="u-display-flex u-display-flex--2 u-margin-top-small">
      <div>
        <Slider />
      </div>
      <div>
        <Text content="Hide on desktop" />
      </div>
    </div>
    <HorizontalRule />
    <Text content="For HTML experts" className="settings__heading" />
    <Text content="Using your own code may affect how the message is rendered. Make sure to use correct and responsive HTML." />
  </div>
);

export default HtmlSettings;
