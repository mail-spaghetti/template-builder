import React, { Fragment } from "react";

import Text from "../atoms/Text";
import Slider from "../molecules/Slider";

const DisplaySlider = () => (
  <Fragment>
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
  </Fragment>
);

export default DisplaySlider;
