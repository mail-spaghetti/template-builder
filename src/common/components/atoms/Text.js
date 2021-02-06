import React from "react";

const Text = ({ content, className, color, style }) => (
  <p className={`${className} text-primary`} style={{ color, ...style }}>
    {content}
  </p>
);

export default Text;
