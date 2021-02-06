import React, { Fragment } from "react";

import Text from "../atoms/Text";
import Slider from "../molecules/Slider";

const DisplaySlider = ({ onSliderValueChange, ...rest }) => {
  const { desktop: showDesktop, mobile: showMobile } = rest;
  return (
    <Fragment>
      <div className="u-display-flex u-display-flex--2">
        <div>
          <Slider
            onSliderValueChange={() => onSliderValueChange("mobile")}
            sliderValue={!showMobile}
          />
        </div>
        <div>
          <Text content="Hide on mobile" />
        </div>
      </div>
      <div className="u-display-flex u-display-flex--2 u-margin-top-small">
        <div>
          <Slider
            onSliderValueChange={() => onSliderValueChange("desktop")}
            sliderValue={!showDesktop}
          />
        </div>
        <div>
          <Text content="Hide on desktop" />
        </div>
      </div>
    </Fragment>
  );
};

export default DisplaySlider;
