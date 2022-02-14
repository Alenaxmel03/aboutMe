import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";


const HomeBlock = (props) => {
  return (
    <div className={s.home_block}>
        <div className={s.home_block_image}>
        <img src= {props.src} alt=""/>
        </div>
        <div className={s.home_block_info}>
          <div className={s.block_info__title}>{props.name} </div>
          <div className={s.block_info__text}>{props.email}</div>
        </div>
        <div className={s.home_block_text}>
          <div className={s.block_text__map}> <span><i class="fas fa-map-marker-alt"></i></span> {props.country}</div>
          <div className={s.block_text__data}> <span><i class="far fa-clock"></i> </span>{props.joined}</div>
        </div>
        </div>
  )
}


const Navbar = () => {
    return(
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/profile"><span className={s.icon}><i class="fas fa-id-card"></i></span>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/dialogs"><span className={s.icon}><i class="fas fa-envelope"></i></span>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/users"><span className={s.icon}><i class="fas fa-user-friends"></i></span>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/news"><span className={s.icon}> <i class="fas fa-newspaper"></i></span>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/photos"> <span className={s.icon}> <i class="far fa-images"></i></span>Photos</NavLink>
      </div>
      <div className={s.item} >
      </div> 
</nav>
    )
}

export default Navbar;