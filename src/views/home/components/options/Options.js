import React from "react";
import { OPTIONS } from "../../data";

const Options = ({ selection }) => (
  <div className="home__options--row">
    {OPTIONS.map((option, idx) => (
      <div
        className={`${selection === option && "home__selected"}`}
        key={idx}
      >
        {option}
      </div>
    ))}
  </div>
);

export default Options;
