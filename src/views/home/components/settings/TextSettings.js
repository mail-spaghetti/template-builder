import React from "react";

import {
  setTextMarginBottom,
  setTextMarginLeft,
  setTextMarginRight,
  setTextMarginTop,
  showTextDestkop,
  showTextMobile,
} from "../../../../actions/components.action";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

const TextSettings = ({ component, dispatch }) => {
  const { text: textSettingValues } = component;

  const funcMap = {
    top: (value) => dispatch(setTextMarginTop(value)),
    bottom: (value) => dispatch(setTextMarginBottom(value)),
    right: (value) => dispatch(setTextMarginRight(value)),
    left: (value) => dispatch(setTextMarginLeft(value)),
    mobile: () => dispatch(showTextMobile()),
    desktop: () => dispatch(showTextDestkop()),
  };

  const onHandleMarginSet = (value, position) => funcMap[position](value);

  const onHandleSliderChange = (position) => funcMap[position]();

  return (
    <div className="u-padding-light">
      <Text className="settings__heading" content="Margin" />
      <MarginSet {...textSettingValues} onHandleMarginSet={onHandleMarginSet} />
      <HorizontalRule />
      <DisplaySlider
        {...textSettingValues}
        onSliderValueChange={onHandleSliderChange}
      />
    </div>
  );
};

export default TextSettings;
