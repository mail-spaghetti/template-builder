import React from "react";

const DraftText = ({ onHandleChange }) => {
  return (
    <p
      onInput={onHandleChange}
      suppressContentEditableWarning={true}
      contentEditable={true}
    >
      This is a draft text
    </p>
  );
};

export default DraftText;
