import React from "react";

const DraftButton = ({ content = "Choose Image", onHandleChange }) => (
  <button onClick={onHandleChange} className="btn btn--draft">
    {content.content}
  </button>
);

export default DraftButton;
