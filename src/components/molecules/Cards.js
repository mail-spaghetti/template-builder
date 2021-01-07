import React, { useEffect, useState } from "react";

import Text from "../atoms/Text";

const Cards = ({ text, icon }) => {
  const [component, setComponent] = useState(null);
  useEffect(() => {
    if (icon) {
      const Components = require(`../../utils/icons/${icon}.js`);
      setComponent(Components.default);
    }
  }, []);
  return (
    <div className="card">
      {component && <span>{component}</span>}
      {text && <Text content={text} />}
    </div>
  );
};

export default Cards;
