import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
      <NavLink className={s.header__link}  to="/content">About.<span>Me</span></NavLink>
        </div>
        <div className={s.login_block} >
          {props.isAuth ? props.login :<NavLink to={"/login"}>Login</NavLink>}
        </div>


      <div className={s.header__burger}>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
