import React, { useRef, useState } from "react";

import Minus from "../../utils/icons/Minus";
import Plus from "../../utils/icons/Plus";
import Text from "../atoms/Text";

const Knob = ({ className, content = 0, onHandleClick }) => {
  const intervalRef = useRef(null)
  const timeDifferential = (state, count) => {
    if (state) intervalRef.current = setInterval(() => onHandleClick(count), 150);
    else clearInterval(intervalRef.current);
  };

  const handleMouseEvent = (e, state, count = 1) => {
    e.preventDefault();
    timeDifferential(state, count);
  };

  return (
    <div className={`${className} knob`}>
      <div
        className="knob__icon knob__icon--left knob__icon--minus"
        onMouseDown={(e) => handleMouseEvent(e, true, -1)}
        onMouseUp={(e) => handleMouseEvent(e, false)}
        onClick={()=>onHandleClick(-1)}
        onMouseLeave={()=>clearInterval(intervalRef.current)}
      >
        <Minus />
      </div>
      <div className="knob__text">
        <Text className="knob__text--value" content={content} />
      </div>
      <div
        className="knob__icon knob__icon--right knob__icon--plus"
        onMouseDown={(e) => handleMouseEvent(e, true, 1)}
        onMouseUp={(e) => handleMouseEvent(e, false)}
        onClick={()=>onHandleClick(1)}
        onMouseLeave={()=>clearInterval(intervalRef.current)}
      >
        <Plus />
      </div>
    </div>
  );
};

export default Knob;
