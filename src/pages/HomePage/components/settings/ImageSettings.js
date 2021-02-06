import React from "react";

import Button from "../../../../common/components/atoms/Button";
import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Paper from "../../../../common/components/molecules/Paper";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import MarginSet from "../../../../common/components/organisms/MarginSet";

const ImageSettings = () => (
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
          input: "http://",
        },
      }}
      className="u-padding-none u-margin-top-light"
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
    <Text content="Margin" className="settings__heading" />
    <MarginSet />
    <HorizontalRule />
    <DisplaySlider />
  </div>
);

export default ImageSettings;
