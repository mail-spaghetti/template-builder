import React from "react";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

import { funcMap } from "../../data/helper";

const TextSettings = ({ type, component, dispatch }) => {
  const { text: textSettingValues } = component,
    block = type.toLowerCase();

  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value, block));

  const onHandleSliderChange = (position) => dispatch(funcMap[position](block));

  return (
    <div className="u-padding-small">
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
