import React from "react";

import { INPUT_PLACEHOLDER } from "../../views/home/data";

const DraftText = ({ onHandleChange, content }) => (
  <p
    id="draftText"
    onBlur={onHandleChange}
    suppressContentEditableWarning={true}
    contentEditable={true}
    style={{ outline: "none" }}
    onMouseOver={() =>
      setTimeout(() => document.getElementById("draftText").focus(), 0)
    }
  >
    {content}
  </p>
);

export default DraftText;
