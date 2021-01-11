import React from "react";

import { setSelected } from "../../../../actions/options.action";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import Slider from "../../../../components/molecules/Slider";
import Knob from "../../../../components/organisms/Knob";
import LeftArrow from "../../../../utils/icons/LeftArrow";

const StructureSettings = ({ type, structure, settings, dispatch }) => {
  const onHandleSettingsExit = () => dispatch(setSelected({ selected: false }));
  return (
    <div className="settings">
      <div className="settings__type">
        <Text className="text-tertiary" content={type} />
        <div className="settings__back" onClick={onHandleSettingsExit}>
          <span>
            <LeftArrow />
          </span>
          <span>
            <Text content="BACK" />
          </span>
        </div>
      </div>
      <div className="u-margin-top-small">
        <Text content="Columns" />
        <div className="u-margin-top-light"><Knob /></div>
      </div>
      <div className="u-margin-top-small">
        <div className="row">
          <div className="col-1-of-2">
            <div>
              <Text content="Top & Bottom padding" />
            </div>
            <div className="u-margin-top-light">
              <Knob />
            </div>
          </div>
          <div className="col-1-of-2">
            <div>
              <Text content="Background Color" />
            </div>
            <div className="u-margin-top-light">
              <Paper bgColor={structure.backgroundColor} />
            </div>
          </div>
        </div>
      </div>
      <div className="u-margin-top-light u-display-flex-between">
        <span><Text content="Do not stack column on mobile" /></span>
        <span><Slider /></span>
      </div>
    </div>
  );
};

export default StructureSettings;
