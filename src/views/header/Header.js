import React from "react";
import Button from "../../components/atoms/Button";
import { ButtonData } from "./data";

import Logo from "../../utils/icons/Logo";

const Header = (props) => (
  <div className="header">
    <div className="header__logo">
      <Logo />
    </div>
    <div className="header__cta">
      {ButtonData.map((d, idx) => (
        <Button key={idx} variant="secondary" text={d.text} />
      ))}
    </div>
    <div className="header__auth">
      <span className="header__caption">User Name</span>
      <span>
        <figure className="header__shape">
          {props.img ? (
            <img className="header__img" alt="Authenticated user" />
          ) : null}
        </figure>
      </span>
    </div>
  </div>
);

export default Header;
