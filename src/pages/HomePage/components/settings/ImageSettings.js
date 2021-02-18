import React from "react";

import Button from "../../../../common/components/atoms/Button";
import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Align from "../../../../common/components/molecules/Align";
import Paper from "../../../../common/components/molecules/Paper";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import MarginSet from "../../../../common/components/organisms/MarginSet";
import { funcMap } from "../../data/helper";

const ImageSettings = ({ type, component, dispatch }) => {
  const { contentIndex, columnIndex, rowIndex } = component.currentActiveBlock;
  const { mobile, desktop, align, ...marginSettings } = component?.contents[
      contentIndex
    ]?.columns[columnIndex]?.rows[rowIndex].value.properties,
    imageURL =
      component?.contents[contentIndex]?.columns[columnIndex]?.rows[rowIndex]
        .value.content;
  const onHandleMarginSet = (value, position) =>
    dispatch(funcMap[position](value));
  const onHandleInputChange = (value) =>
    dispatch(funcMap["update"](value));
  return (
    <div className="u-padding-light settings__scroll">
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
            icon: "Link",
            input: imageURL?.startsWith("data") ? "": imageURL,
          },
        }}
        className="u-padding-none u-margin-top-light"
        onHandleInputChange={(val) => onHandleInputChange(val, "sourceURL")}
      />
      <Paper
        properties={{
          link: {
            icon: "Alt",
            input: "Alt",
          },
        }}
        className="u-padding-none u-margin-top-small"
      />
      <HorizontalRule />
      <Text content="Align" className="settings__heading" />
      <Align onHandleAlignClick={onHandleMarginSet} />
      <HorizontalRule />
      <Text content="Margin" className="settings__heading" />
      <MarginSet {...marginSettings} onHandleMarginSet={onHandleMarginSet} />
      <HorizontalRule />
      <DisplaySlider />
    </div>
  );
};

export default ImageSettings;
