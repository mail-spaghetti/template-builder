import React from "react";

const BlockLayout = (_ref, onHandleChange) => {
  return (
    <div>
      {
        <div>
          {require(`../atoms/${_ref}.js`).default({ onHandleChange })}
        </div>
      }
    </div>
  )
}

export default BlockLayout
