import React from "react";

const BlockLayout = (_ref, onHandleChange, content) => {
  return (
    <div>
      {
        <div>
          {require(`../atoms/${_ref}.js`).default({ onHandleChange, content })}
        </div>
      }
    </div>
  )
}

export default BlockLayout
