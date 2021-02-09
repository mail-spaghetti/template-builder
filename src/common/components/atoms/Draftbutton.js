import React from "react";

const DraftButton = ({ content = "Choose Image", onHandleChange }) => {
  const inlineStyle = {
    display: content?.properties.fullWidth ? 'block': 'inline-block',
    marginTop: content?.properties.marginTop,
    marginRight: content?.properties.marginRight,
    marginBottom: content?.properties.marginBottom,
    marginLeft: content?.properties.marginLeft,
    color: content?.properties.color,
    background: content?.properties.background,
    borderRadius: content?.properties.borderRadius,
  };

  const link = content?.properties.link;
  return (
    <a
      contentEditable="true"
      suppressContentEditableWarning={true}
      onClick={onHandleChange}
      href={link}
      target="_blank"
      style={inlineStyle}
      className="btn btn--draft"
    >
      {content.content}
    </a>
  );
};

export default DraftButton;
