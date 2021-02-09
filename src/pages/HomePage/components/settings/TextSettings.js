import React from "react";
import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import MarginSet from "../../../../common/components/organisms/MarginSet";

import { funcMap } from "../../data/helper";

const TextSettings = ({ type, component, dispatch }) => {
  const { contentIndex, columnIndex, rowIndex } = component.currentActiveBlock;
  const properties =
      component?.contents[contentIndex]?.columns[columnIndex]?.rows[rowIndex]
        .value.properties,
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
