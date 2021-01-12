import React from "react";
import Text from "../../../../components/atoms/Text";
import LeftArrow from "../../../../utils/icons/LeftArrow";
import { setSelected } from "../../../../actions/options.action";
import Knob from "../../../../components/organisms/Knob";
import Slider from "../../../../components/molecules/Slider";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Paper from "../../../../components/molecules/Paper";

const PageSettings = ({ type, dispatch, settings }) => {
  return (
    <div className="settings">
      <div className="u-padding-small">
        <div className="u-display-flex u-display-inline-2">
          <div>
            <Text className="settings__heading" content="Dark Mode" />
          </div>
          <div>
            <Slider />
          </div>
        </div>
        <HorizontalRule />
        <Text className="settings__heading" content="Email width" />
        <div className="u-margin-top-light">
          <Knob />
        </div>
        <HorizontalRule />
        <Text className="settings__heading" content="Color Setting" />
        <div className="row u-margin-top-small u-margin-bottom-none">
          <div className="col-1-of-2">
            <Text content="Background color" />
            <Paper
              className="u-margin-top-light"
              properties={{
                color: settings.backgroundColor,
                text: settings.backgroundColor,
              }}
            />
          </div>
          <div className="col-1-of-2">
            <Text content="Background color" />
            <Paper
              className="u-margin-top-light"
              properties={{
                color: settings.buttonColor,
                text: settings.buttonColor,
              }}
            />
          </div>
        </div>
        <div className="row u-margin-top-light u-margin-bottom-none">
          <div className="col-1-of-2">
            <Text content="Background color" />
            <Paper
              className="u-margin-top-light"
              properties={{
                color: settings.linkColor,
                text: settings.linkColor,
              }}
            />
          </div>
          <div className="col-1-of-2">&nbsp;</div>
        </div>
        <HorizontalRule />
      </div>
    </div>
  );
};

export default PageSettings;
