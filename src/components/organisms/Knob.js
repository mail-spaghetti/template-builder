import React from "react";
import Minus from "../../utils/icons/Minus";
import Plus from "../../utils/icons/Plus";
import Text from "../atoms/Text";

const Knob = ({ className, content = 0, onHandleClick }) => (
  <div className={`${className} knob`}>
    <div
      className="knob__icon knob__icon--left knob__icon--minus"
      onClick={() => onHandleClick(-1)}
    >
      <Minus />
    </div>
    <div className="knob__text">
      <Text className="knob__text--value" content={content} />
    </div>
    <div
      className="knob__icon knob__icon--right knob__icon--plus"
      onClick={() => onHandleClick(1)}
    >
      <Plus />
    </div>
  </div>
);

export default Knob;
