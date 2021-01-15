import React from "react";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import Slider from "../../../../components/molecules/Slider";
import Knob from "../../../../components/organisms/Knob";

const VideoSettings = () => (
  <div className="u-padding-light">
    <Text content="Link to video" />
    <Paper
      properties={{
        link: {
          icon: "Link",
          input: "Youtube, Vimeo,",
        },
      }}
      className="u-padding-none"
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
    <div className="row">
      <div className="col-1-of-2">
        <Text content="Image Size" />
        <Knob />
      </div>
      <div className="col-1-of-2">
        <Text content="Margin" />
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

export default VideoSettings;
