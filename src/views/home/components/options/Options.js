import React from "react";
import { OPTIONS } from "../../data";

const Options = ({ selection, onHandleSelection }) => (
  <div className="home__options--row">
    {OPTIONS.map((option, idx) => (
      <div
        className={`${
          selection === option ? "home__selected" : "home__default"
        }`}
        key={idx}
        onClick={() => onHandleSelection(option)}
      >
        {option}
      </div>
    ))}
  </div>
);

export default Options;
