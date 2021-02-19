import React from "react";
import { ALIGN_ICONS } from "../../../utils";

const Align = ({ type, onHandleAlignClick }) => (
  <div className="form__align">
    {ALIGN_ICONS.map((icon, idx) => (
      <span
        key={idx}
        className={`${icon.link === type ? "form__align--selected" : null}`}
        onClick={onHandleAlignClick.bind(this, icon.link, "align")}
      >
        {require(`../../../utils/icons/${icon.name}.js`).default()}
      </span>
    ))}
  </div>
);

export default Align;
