import React, { Fragment } from "react";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Slider from "../../../../components/molecules/Slider";
import Knob from "../../../../components/organisms/Knob";

const TextSettings = () => (
  <div className="u-padding-light">
    <Text className="settings__heading" content="Margin" />
    <div>
      <div className="row">
        <div className="col-1-of-2">
          <Text content="Margin Top" />
          <Knob />
        </div>
        <div className="col-1-of-2">
          <Text content="Margin Bottom" />
          <Knob />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Text content="Margin Left" />
          <Knob />
        </div>
        <div className="col-1-of-2">
          <Text content="Margin Right" />
          <Knob />
        </div>
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
  </div>
);

export default TextSettings;
