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
  const { contentIndex, columnIndex, rowIndex } = component.currentActiveBlock;
  const { button: buttonSettingValues } = component,
    block = type.toLowerCase();
  const {
    background,
    color,
    borderRadius,
    link,
    align,
    ...marginSettings
  } = component?.contents[contentIndex]?.columns[columnIndex]?.rows[
    rowIndex
  ].value.properties;
  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value));

  const onHandleSliderChange = (position) => dispatch(funcMap[position](block));

  const onHandleProperties = (val, prop) => dispatch(funcMap[prop](val));
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
        properties={{
          link: {
            icon: "Link",
            input: link,
          },
        }}
        onHandleInputChange={(val) => onHandleMarginSet(val, "linkInput")}
        className="u-padding-none"
      />
      <HorizontalRule />
      <Text content="Align" className="settings__heading" />
      <div className="row u-margin-bottom-none">
        <div className="col-2-of-3">
          <Align type={align} onHandleAlignClick={onHandleMarginSet} />
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
            onHandleColor={(val) => onHandleProperties(val, "background")}
            properties={{
              color: background,
              text: background,
            }}
          />
        </div>
        <div className="col-1-of-2">
          <Text content="Button Text color" />
          <Paper
            className="u-margin-top-light"
            properties={{
              color,
              text: color,
            }}
            onHandleColor={(val) => onHandleProperties(val, "color")}
          />
        </div>
      </div>
      <div className="row u-margin-bottom-none">
        <div className="col-1-of-2">
          <Text content="Border Radius" />
          <Knob
            className="u-margin-top-light"
            content={borderRadius}
            onHandleClick={(val) => onHandleMarginSet(val, "radius")}
          />
        </div>
        <div className="col-1-of-2">&nbsp;</div>
      </div>
      <HorizontalRule />
      <Text content="Margin" className="settings__heading" />
      <MarginSet {...marginSettings} onHandleMarginSet={onHandleMarginSet} />
      <HorizontalRule />
      <DisplaySlider
        {...buttonSettingValues}
        onSliderValueChange={onHandleSliderChange}
      />
    </div>
  );
};

export default ButtonSettings;
