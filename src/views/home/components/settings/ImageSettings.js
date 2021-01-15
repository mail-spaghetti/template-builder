import React from "react";
import Button from "../../../../components/atoms/Button";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";

const ImageSettings = () => (
  <div className="u-padding-light">
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
          input: "http://"
        },
      }}
      className="u-padding-none"
    />
    <HorizontalRule />
  </div>
);

export default ImageSettings;
