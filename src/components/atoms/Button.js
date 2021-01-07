import React, { useEffect, useState } from "react";

const Button = (props) => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (props.icon) {
      const Components = require(`../../utils/icons/${props.icon}.js`);
      setComponent(Components.default);
    }
  }, []);

  const { text, variant } = props;

  return (
    <button className={`btn btn__${variant}`}>
      <div className="btn__contents">
        {component && <span>{component}</span>}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
