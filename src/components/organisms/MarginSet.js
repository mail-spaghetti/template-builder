import React, { Fragment } from "react";

import Text from "../atoms/Text";
import Knob from "./Knob";

const MarginSet = () => (
  <Fragment>
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
  </Fragment>
);

export default MarginSet;
