import React, { Fragment } from "react";

const BlockLayout = (_ref, onHandleChange, content) => {
  return (
    <Fragment>
      {
        <div id="block">
          {require(`../atoms/${_ref}.js`).default({ onHandleChange, content })}
        </div>
      }
    </Fragment>
  );
};

export default BlockLayout;
