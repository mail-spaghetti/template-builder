import React from "react";

import Button from "../../../../components/atoms/Button";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Align from "../../../../components/molecules/Align";
import Paper from "../../../../components/molecules/Paper";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

import { funcMap } from "../../data/helper";

const GifSettings = ({ type, component, dispatch }) => {
  const { gif: gifSettings } = component;
  console.log(component);
  const {
      mobile,
      desktop,
      ...marginSettings
    } = component?.contents[0]?.columns[component.activeRow.columnIndex]?.rows[
      component.activeRow.rowIndex
    ].value.properties,
    gifURL =
      component?.contents[0]?.columns[component.activeRow.columnIndex]?.rows[
        component.activeRow.rowIndex
      ].value.content,
    block = type.toLowerCase();

  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value));

  const onHandleSliderChange = (position) => dispatch(funcMap[position](block));

  const onHandleInputChange = (e, prop) =>
    dispatch(funcMap["linkInput"](e.target.value, prop, block));

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
        properties={{
          link: {
            input: gifURL,
            icon: "Link",
          },
        }}
        className="u-padding-none"
        onHandleInputChange={(e) => onHandleInputChange(e, "sourceURL")}
      />
      <HorizontalRule />
      <Text content="Align" className="settings__heading" />
      <Align />
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
      <MarginSet {...marginSettings} onHandleMarginSet={onHandleMarginSet} />
      <HorizontalRule />
      <DisplaySlider
        {...gifSettings}
        onSliderValueChange={onHandleSliderChange}
      />
    </div>
  );
};

export default GifSettings;
