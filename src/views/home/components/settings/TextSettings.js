import React from "react";

import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import DisplaySlider from "../../../../components/organisms/DisplaySlider";
import MarginSet from "../../../../components/organisms/MarginSet";

const TextSettings = () => (
  <div className="u-padding-light">
    <Text className="settings__heading" content="Margin" />
    <MarginSet />
    <HorizontalRule />
    <DisplaySlider />
  </div>
);

export default TextSettings;
