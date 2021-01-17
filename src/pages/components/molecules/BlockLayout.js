import React, { useEffect } from "react";

const BlockLayout = (_ref, content = "Normal Text") => (
  <div>
    {
      <div>
        {require(`../atoms/${_ref}.js`).default({ content, edit: "false" })}
      </div>
    }
  </div>
);

export default BlockLayout;
