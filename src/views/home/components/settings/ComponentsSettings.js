import React from "react";

const ComponentsSettings = ({ type, ...rest }) => {
  return (
    <div>
      {require(`./${type.replace(" Settings", "")}Settings.js`).default({
        type: type || selection,
        ...rest,
      })}
    </div>
  );
};

export default ComponentsSettings;
