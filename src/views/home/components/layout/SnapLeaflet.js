import React, { Fragment } from "react";

import Add from "../../../../utils/icons/Add";
import Copy from "../../../../utils/icons/Copy";
import Delete from "../../../../utils/icons/Delete";
import Move from "../../../../utils/icons/Move";

const SnapLeaflet = ({ _leaflet = "outer", onHandleDelete, onHandleCopy }) => (
  <Fragment>
    <div
      className={`draft__snap draft__snap--1 ${
        _leaflet === "outer" ? "u-background-red" : "u-background-green"
      }`}
    >
      <span>
        <Add />
      </span>
      <span onClick={() => onHandleDelete(_leaflet)}>
        <Delete />
      </span>
    </div>
    <div
      className={`draft__snap draft__snap--2 ${
        _leaflet === "outer" ? "u-background-red" : "u-background-green"
      }`}
    >
      <span>
        <Add />
      </span>
      <span>
        <Move />
      </span>
    </div>
    <div
      className={`draft__snap draft__snap--3 ${
        _leaflet === "outer" ? "u-background-red" : "u-background-green"
      }`}
    >
      <span onClick={() => onHandleCopy(_leaflet)}>
        <Copy />
      </span>
    </div>
  </Fragment>
);

export default SnapLeaflet;
