import React from "react";

import Button from "../../../../components/atoms/Button";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

import {
  setURL,
  setMarginBottom,
  setMarginLeft,
  setMarginRight,
  setMarginTop,
  showDestkop,
  showMobile,
} from "../../../../actions/components.action";

const GifSettings = ({ type, component, dispatch }) => {
  const funcMap = {
    top: (value) => dispatch(setMarginTop(value, block)),
    bottom: (value) => dispatch(setMarginBottom(value, block)),
    right: (value) => dispatch(setMarginRight(value, block)),
    left: (value) => dispatch(setMarginLeft(value, block)),
    mobile: () => dispatch(showMobile({ block })),
    desktop: () => dispatch(showDestkop({ block })),
    linkInput: (value, prop) => dispatch(setURL(value, block, prop)),
  };
  const { gif: gifSettings } = component,
    block = type.toLowerCase();
  const onHandleMarginSet = (value, position) => funcMap[position](value);

  const onHandleSliderChange = (position) => funcMap[position]();

  const onHandleInputChange = (e, prop) =>
    funcMap["linkInput"](e.target.value, prop);

  return (
    <div className="settings__scroll u-padding-light">
      <Button
        variant="tertiary"
        text="Choose Image"
        className="settings__button"
      />
      <HorizontalRule />
      <Text content="Source url" className="settings__heading" />
      <Paper
        properties={gifSettings.sourceURL}
        className="u-padding-none"
        onHandleInputChange={(e) => onHandleInputChange(e, "sourceURL")}
      />
      <HorizontalRule />
      <Text content="Gif Properites" className="settings__heading" />
      <Paper
        properties={gifSettings.gifURL}
        className="u-padding-none"
        onHandleInputChange={(e) => onHandleInputChange(e, "gifURL")}
      />
      <Paper
        properties={gifSettings.gifText}
        className="u-padding-none u-margin-top-small"
        onHandleInputChange={(e) => onHandleInputChange(e, "gifText")}
      />
      <HorizontalRule />
      <Text content="Margin" className="settings__heading" />
      <MarginSet {...gifSettings} onHandleMarginSet={onHandleMarginSet} />
      <HorizontalRule />
      <DisplaySlider
        {...gifSettings}
        onSliderValueChange={onHandleSliderChange}
      />
    </div>
  );
};

export default GifSettings;
