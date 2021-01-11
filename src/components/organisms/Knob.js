import React from "react";
import Minus from "../../utils/icons/Minus";
import Plus from "../../utils/icons/Plus";
import Text from "../atoms/Text";

const Knob = ({
  className,
  content = 0,
  onHandleLeftClick,
  onHandleRightClick,
}) => (
  <div className={(className, "knob")}>
    <div
      className="knob__icon knob__icon--left knob__icon--minus"
      onClick={onHandleLeftClick}
    >
      <Minus />
    </div>
    <div className="knob__text">
      <Text className="knob__text--value" content={content} />
    </div>
    <div
      className="knob__icon knob__icon--right knob__icon--plus"
      onClick={onHandleRightClick}
    >
      <Plus />
    </div>
  </div>
);

export default Knob;
