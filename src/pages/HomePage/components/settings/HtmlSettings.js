import React from "react";

import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import DisplaySlider from "../../../../common/components/organisms/DisplaySlider";
import MarginSet from "../../../../common/components/organisms/MarginSet";


const HtmlSettings = () => (
  <div className="u-padding-light">
    <Text content="Margin" className="settings__heading" />
    <MarginSet />
    <HorizontalRule />
    <DisplaySlider />
    <HorizontalRule />
    <Text content="For HTML experts" className="settings__heading" />
    <Text content="Using your own code may affect how the message is rendered. Make sure to use correct and responsive HTML." />
  </div>
);

export default HtmlSettings;
