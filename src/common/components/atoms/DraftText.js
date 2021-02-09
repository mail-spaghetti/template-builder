import React from "react";

const DraftText = ({ onHandleChange, content }) => {
  const inlineStyle = {
    marginTop: content?.properties.marginTop,
    marginRight: content?.properties.marginRight,
    marginBottom: content?.properties.marginBottom,
    marginLeft: content?.properties.marginLeft,
  };
  return (
    <p
      id="draftText"
      onBlur={onHandleChange}
      suppressContentEditableWarning={true}
      contentEditable={true}
      style={{
        outline: "none",
        ...inlineStyle,
      }}
    >
      {content.content}
    </p>
  );
};

export default DraftText;
