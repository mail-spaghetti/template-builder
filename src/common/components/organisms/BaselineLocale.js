import React from "react";

import { FONT_STYLES } from "../../../utils";

import Text from "../atoms/Text";

const BaseLineLocale = ({ properties, className }) => (
  <div className={`baseline ${className}`}>
    <div className="baseline__row">
      <span className="baseline--color">
        <span style={{ background: properties.fontColor }}>&nbsp;</span>
      </span>
      <span className="baseline--size">
        <Text content={properties.fontSize} />
      </span>
      <span className="baseline--family">
        <Text content={properties.fontFamily} />
      </span>
    </div>
    <div className="baseline__row">
      <span className="baseline--style">
        {FONT_STYLES.map((style, idx) => (
          <Text style={style.style} content={style.text} key={idx} />
        ))}
      </span>
    </div>
  </div>
);

export default BaseLineLocale;
