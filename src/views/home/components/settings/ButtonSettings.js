import React, { useEffect } from "react";

import Button from "../../../../components/atoms/Button";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import Knob from "../../../../components/organisms/Knob";
import MarginSet from "../../../../components/organisms/MarginSet";

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
      <Text content="Properties" className="settings__heading" />
      <div className="row">
        <div className="col-1-of-2">
          <Text content="Background color" />
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
