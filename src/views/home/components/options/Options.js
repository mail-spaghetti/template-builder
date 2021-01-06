import React from "react";
import { OPTIONS } from "../../data";

const Options = () => (
  <div className="row">
    {OPTIONS.map((option, idx) => (
      <div className="col-1-of-3" key={idx}>
        {option}
      </div>
    ))}
  </div>
);

export default Options;
