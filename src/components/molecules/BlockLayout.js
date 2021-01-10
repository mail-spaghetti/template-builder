import React from "react";

const BlockLayout = (_ref, content = "Normal Text") => (
    <div>
      {
        <div>
          {require(`../atoms/${
            _ref[0].toUpperCase() + _ref.substring(1).toLowerCase()
          }.js`).default({ content, edit:"false" })}
        </div>
      }
    </div>
  );

export default BlockLayout;
