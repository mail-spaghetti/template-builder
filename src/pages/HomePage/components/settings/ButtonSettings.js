import React, { useEffect } from "react";

import Button from "../../../../common/components/atoms/Button";
import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Align from "../../../../common/components/molecules/Align";
import Paper from "../../../../common/components/molecules/Paper";
import Slider from "../../../../common/components/molecules/Slider";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import Knob from "../../../../common/components/organisms/Knob";
import MarginSet from "../../../../common/components/organisms/MarginSet";



import { funcMap } from "../../data/helper";

const ButtonSettings = ({ type, component, dispatch }) => {
  const { button: buttonSettingValues } = component,
    block = type.toLowerCase();

  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value, block));

  const onHandleSliderChange = (position) => dispatch(funcMap[position](block));

  const onHandleInputChange = (e, prop) =>
    dispatch(funcMap["linkInput"](e.target.value, prop, block));

  return (
    <div className="settings__scroll u-padding-light">
      <Button
        variant="tertiary"
        text="Choose GIF"
        className="settings__button"
      />
      <HorizontalRule />
      <Text content="Link" className="settings__heading" />
      <Paper
        properties={buttonSettingValues.buttonURL}
        onHandleInputChange={(e) => onHandleInputChange(e, "buttonURL")}
        className="u-padding-none"
      />
      <HorizontalRule />
      <Text content="Align" className="settings__heading" />
      <div className="row u-margin-bottom-none">
        <div className="col-2-of-3">
          <Align />
        </div>
        <div className="col-1-of-3 u-display-flex-between u-translate-y-1">
          <Text content="Full Width" />
          <Slider />
        </div>
      </div>
      <HorizontalRule />
      <Text content="Properties" className="settings__heading" />
      <div className="row">
        <div className="col-1-of-2">
          <Text content="Button color" />
          <Paper
            className="u-margin-top-light"
            properties={{
              color: "#D54D42",
              text: "#D54D42",
            }}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Button Text color" />
          <Paper
            className="u-margin-top-light"
            properties={{
              color: "#FFFFFF",
              text: "#FFFFFF",
            }}
          />
        </div>
      </div>
      <div className="row u-margin-bottom-none">
        <div className="col-1-of-2">
          <Text content="Border Radius" />
          <Knob className="u-margin-top-light" />
        </div>
        <div className="col-1-of-2">&nbsp;</div>
      </div>
      <HorizontalRule />
      <Text content="Margin" className="settings__heading" />
      <MarginSet
        {...buttonSettingValues}
        onHandleMarginSet={onHandleMarginSet}
      />
      <HorizontalRule />
      <DisplaySlider
        {...buttonSettingValues}
        onSliderValueChange={onHandleSliderChange}
      />
    </div>
  );
};

export default ButtonSettings;
