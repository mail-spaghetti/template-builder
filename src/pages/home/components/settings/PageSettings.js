import React from "react";

import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Checker from "../../../../common/components/molecules/Checker";
import Paper from "../../../../common/components/molecules/Paper";
import Slider from "../../../../common/components/molecules/Slider";
import BaseLineLocale from "../../../../common/components/organisms/BaselineLocale";
import Knob from "../../../../common/components/organisms/Knob";

import { ATTACHMENT_TYPES } from "../../data";

const PageSettings = ({ type, dispatch, settings }) => {
  return (
    <div className="settings settings--scroll">
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
        <Text className="settings__heading" content="Fonts Setting" />
        {settings.fontSettings.map((setting, idx) => (
          <div className="u-margin-top-small" key={idx}>
            <Text content={Object.keys(setting)} />
            <BaseLineLocale
              className="u-margin-top-light"
              properties={Object.values(setting)[0]}
            />
          </div>
        ))}
        <HorizontalRule />
        <Text className="settings__heading" content="Attachment Settings" />
        <div className="u-margin-top-small">
          <div className="row">
            <div className="col-1-of-2">
              <Text content="In-force an attachment" />
            </div>
            <div className="col-1-of-2">
              <Slider />
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-2">Number of attachments</div>
            <div className="col-1-of-2">
              <Knob />
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-2">Attachment Types</div>
            <div className="col-1-of-2 u-child-margin-top-light">
              {ATTACHMENT_TYPES.map((attachment, idx) => (
                <Checker
                  key={idx}
                  content={attachment}
                  id={attachment.toLowerCase()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSettings;
