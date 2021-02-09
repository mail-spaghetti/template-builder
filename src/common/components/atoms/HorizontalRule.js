import React from "react";

const HorizontalRule = ({ content }) => {
  const inlineStyle = {
    marginTop: content?.properties.marginTop,
    marginRight: content?.properties.marginRight,
    marginBottom: content?.properties.marginBottom,
    marginLeft: content?.properties.marginLeft,
    borderTop: content?.properties.borderTop,
  };
  return (
    <div className="form__rule" id="block">
      <div id="block" className="form__rule--line" style={inlineStyle}>
        &nbsp;
      </div>
    </div>
  );
};

export default HorizontalRule;
