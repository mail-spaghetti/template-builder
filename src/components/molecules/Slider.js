import React from "react";

const Slider = ({ sliderValue, onSliderValueChange }) => (
  <input
    checked={sliderValue}
    onChange={onSliderValueChange}
    className="form__slider"
    type="checkbox"
  />
);

export default Slider;
