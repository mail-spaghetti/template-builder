import React from "react";

const DraftButton = ({ content = "Choose Image", onHandleChange }) => {
  const inlineStyle = {
    display: content?.properties.fullWidth ? "block" : "inline-block",
    marginTop: content?.properties.marginTop,
    marginRight: content?.properties.marginRight,
    marginBottom: content?.properties.marginBottom,
    marginLeft: content?.properties.marginLeft,
    color: content?.properties.color,
    background: content?.properties.background,
    borderRadius: content?.properties.borderRadius,
    textAlign: content?.properties.align,
  };

  const link = content?.properties.link;
  return (
    <div style={{ textAlign: inlineStyle.textAlign }}>
      <a
        contentEditable="true"
        id="block"
        suppressContentEditableWarning={true}
        href={link}
        target="_blank"
        style={{ ...inlineStyle, textAlign: "center" }}
        className="btn btn--draft"
        onBlur={onHandleChange}
      >
        {content.content || "Choose Image"}
      </a>
    </div>
  );
};

export default DraftButton;
