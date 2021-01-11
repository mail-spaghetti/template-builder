import React from "react";

import Text from "../atoms/Text";

const Paper = ({ bgColor, text }) => (
  <div className="paper">
    {bgColor && <div className="paper__bgColor" style={{ background: bgColor }}>&nbsp;</div>}
    {bgColor ? <Text className="paper__text" content={bgColor} /> : <Text content={text} />}
  </div>
);

export default Paper;
