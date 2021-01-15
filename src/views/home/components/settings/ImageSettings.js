import React from "react";
import Button from "../../../../components/atoms/Button";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import Slider from "../../../../components/molecules/Slider";
import Knob from "../../../../components/organisms/Knob";

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
    <div className="row">
      <div className="col-1-of-2">
        <Text content="Margin Top" />
        <Knob />
      </div>
      <div className="col-1-of-2">
        <Text content="Margin Bottom" />
        <Knob />
      </div>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <Text content="Margin Left" />
        <Knob />
      </div>
      <div className="col-1-of-2">
        <Text content="Margin Right" />
        <Knob />
      </div>
    </div>
    <HorizontalRule />
    <div className="u-display-flex u-display-flex--2">
      <div>
        <Slider />
      </div>
      <div>
        <Text content="Hide on mobile" />
      </div>
    </div>
    <div className="u-display-flex u-display-flex--2 u-margin-top-small">
      <div>
        <Slider />
      </div>
      <div>
        <Text content="Hide on desktop" />
      </div>
    </div>
  </div>
);

export default ImageSettings;
