import React from "react";
import { ALIGN_ICONS } from "../../utils";

const Align = () => (
  <div className="form__align">
    {ALIGN_ICONS.map((icon, idx) => (
      <span key={idx}>
        {require(`../../utils/icons/${icon.name}.js`).default()}
      </span>
    ))}
  </div>
);

export default Align;
