import React from "react";

const Button = (props) => {
  const { text, variant } = props;
  return <button className={`btn btn__${variant}`}>{text}</button>;
};

export default Button;
