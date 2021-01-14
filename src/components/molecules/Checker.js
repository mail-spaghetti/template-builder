import React from "react";
import Text from "../atoms/Text";

const Checker = ({ value, content, id }) => (
  <div className="form__checkbox">
    <input
      className="form__checkbox--input"
      id={`cust-checkbox-${id}`}
      type="checkbox"
    />
    <label htmlFor={`cust-checkbox-${id}`} className="form__checkbox--label">
      <div className="form__checkbox--box">&nbsp;</div>
      <Text content={content} />
    </label>
  </div>
);

export default Checker;
