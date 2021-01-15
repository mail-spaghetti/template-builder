import React from "react";

import Text from "../../../../components/atoms/Text";
import LeftArrow from "../../../../utils/icons/LeftArrow";

import { setSelected } from "../../../../actions/options.action";

const ComponentsSettings = ({ type, ...rest }) => {
  const onHandleSettingsExit = () => rest.dispatch(setSelected({ selected: false }));
  return (
    <div className="settings">
      <div className="settings__type u-margin-top-light">
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
      {require(`./${type.replace(" Settings", "")}Settings.js`).default({
        type: type,
        ...rest,
      })}
    </div>
  );
};

export default ComponentsSettings;
