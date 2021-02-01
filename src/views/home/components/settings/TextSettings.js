import React from "react";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

import { funcMap } from "../../data/helper";

const TextSettings = ({ type, component, dispatch }) => {
  const { properties } = component.contents[0].columns[
      component.activeRow.rowIndex
    ].rows[component.activeRow.columnIndex].value,
    block = type.toLowerCase();

  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value, block));

  const onHandleSliderChange = (position) => dispatch(funcMap[position](block));
  return (
    <div className="u-padding-small">
      <Text className="settings__heading" content="Margin" />
      <MarginSet {...properties} onHandleMarginSet={onHandleMarginSet} />
      <HorizontalRule />
      <DisplaySlider
        {...properties}
        onSliderValueChange={onHandleSliderChange}
      />
    </div>
  );
};

export default TextSettings;
