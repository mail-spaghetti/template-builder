import React from "react";
import { ALIGN_ICONS } from "../../../utils";

const Align = ({ onHandleAlignClick }) => (
  <div className="form__align">
    {ALIGN_ICONS.map((icon, idx) => (
      <span
        key={idx}
        onClick={onHandleAlignClick.bind(this, icon.link, "align")}
      >
        {require(`../../../utils/icons/${icon.name}.js`).default()}
      </span>
    ))}
  </div>
);

export default Align;
