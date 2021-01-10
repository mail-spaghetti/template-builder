import React from "react";

const Text = ({ content, className, color }) => (
  <p
    className={`${className} text-primary`}
    style={{ color }}
  >
    {content}
  </p>
);

export default Text;
