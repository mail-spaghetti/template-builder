import React from "react";
import Button from "../../components/atoms/Button";
import { ButtonData } from "./data";

import Logo from "../../utils/icons/Logo";

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <Logo />
    </div>
    <div className="header__cta">
      {ButtonData.map((d, idx) => (
        <Button key={idx} variant="secondary" text={d.text} />
      ))}
    </div>
  </div>
);

export default Header;
