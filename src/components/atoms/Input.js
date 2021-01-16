import React from "react";

const Input = ({ placeholder, value, className, onInputChange }) => {
  return (
    <div className={`form__input ${className}`}>
      <input placeholder={placeholder} value={value} onChange={onInputChange} />
    </div>
  )
}

export default Input;
