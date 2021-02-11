import React from "react";

const DraftSpacer = ({ content }) => {
  const inlineStyle = {
    height: content.properties.height,
    background: content.properties.background,
  };
  return <div id="block" style={inlineStyle}>&nbsp;</div>;
};

export default DraftSpacer;
