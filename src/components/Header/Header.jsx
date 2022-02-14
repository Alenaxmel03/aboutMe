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
          {props.isAuth ? props.login : <div className={s.login_item}> <a target="_blank" href="https://social-network.samuraijs.com/login">Sign In</a>
          <div className={s.login_info} > 
              <div>Please enter your username and password for more features in this app.</div>
              <div className={s.login_data}> Username:<span> alenaxmel03@gmail.com </span></div>

              <div className={s.login_data}> Password: <span>123123</span></div></div> </div> }
      </div>
    </header>
  );
};

export default Header;
