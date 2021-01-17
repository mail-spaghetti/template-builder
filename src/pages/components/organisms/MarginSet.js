import React, { Fragment } from "react";

import Text from "../atoms/Text";
import Knob from "./Knob";

const MarginSet = ({ onHandleMarginSet, ...rest }) => {
  const { marginTop, marginBottom, marginRight, marginLeft } = rest;
  return (
    <Fragment>
      <div className="row u-margin-bottom-none u-margin-top-light">
        <div className="col-1-of-2">
          <Text content="Margin Top" />
          <Knob
            className="u-margin-top-x-light"
            onHandleClick={(val) => onHandleMarginSet(val, "top")}
            content={`${marginTop}px`}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Margin Bottom" />
          <Knob
            onHandleClick={(val) => onHandleMarginSet(val, "bottom")}
            className="u-margin-top-x-light"
            content={`${marginBottom}px`}
          />
        </div>
      </div>
      <div className="row u-margin-bottom-none u-margin-top-light">
        <div className="col-1-of-2">
          <Text content="Margin Left" />
          <Knob
            onHandleClick={(val) => onHandleMarginSet(val, "left")}
            className="u-margin-top-x-light"
            content={`${marginLeft}px`}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Margin Right" />
          <Knob
            onHandleClick={(val) => onHandleMarginSet(val, "right")}
            className="u-margin-top-x-light"
            content={`${marginRight}px`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MarginSet;
