import React from "react";

import { INPUT_PLACEHOLDER } from "../../views/home/data";

const DraftText = ({ onHandleChange, content = INPUT_PLACEHOLDER }) => {
  return (
    <p
      onBlur={onHandleChange}
      suppressContentEditableWarning={true}
      contentEditable={true}
    >
      {content}
    </p>
  );
};

export default DraftText;
