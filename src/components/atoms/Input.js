import React from "react";

const Input = ({ placeholder, value, className, onInputChange }) => {
  function onHandleInputChange(e) {
    e = window.event || e;
    if (this === e.target) onInputChange(e);
  }
  return (
    <div className={`form__input ${className}`}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onHandleInputChange(e)}
      />
    </div>
  );
};

export default Input;
