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
      <HomeBlock  src="https://i.pinimg.com/564x/38/1b/06/381b0623eda223138f89bf2c4b312076.jpg" name="Mark Smith" email="@mark_photo" country="Netherlands" joined="Joined July 2017"/>

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
        <NavLink  className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/settings"> <span className={s.icon}><i class="fas fa-user-cog"></i></span>Settings</NavLink>
      </div>
      <div className={s.item } >
        <NavLink  className={s.item__link} className = { navData => navData.isActive ? s.active : s.item__link } to="/friends"> <span className={s.icon}><i class="fas fa-users"></i></span>Friends</NavLink>
      </div>
      
</nav>
    )
}

export default Navbar;