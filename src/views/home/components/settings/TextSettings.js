import React from "react";

import {
  setMarginBottom,
  setMarginLeft,
  setMarginRight,
  setMarginTop,
  showDestkop,
  showMobile,
} from "../../../../actions/components.action";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

const TextSettings = ({ type, component, dispatch }) => {
  const { text: textSettingValues } = component,
    block = type.toLowerCase();

  const funcMap = {
    top: (value) => dispatch(setMarginTop(value, block)),
    bottom: (value) => dispatch(setMarginBottom(value, block)),
    right: (value) => dispatch(setMarginRight(value, block)),
    left: (value) => dispatch(setMarginLeft(value, block)),
    mobile: () => dispatch(showMobile({ block })),
    desktop: () => dispatch(showDestkop({ block })),
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
