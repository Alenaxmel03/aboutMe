import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";
import s from "./Users.module.css";
import Paginator from "./Paginator";

let Users = (props) => {
  return (
    <div className={s.main_block_users}>
     <div className={s.paginator}> <Paginator  currentPage ={props.currentPage} onPageChanged ={props.onPageChanged} totalUsersCount ={props.totalUsersCount} pageSize={props.pageSize}/></div>
     <div className={s.block_users}>
      {props.users.map((u) => (
        <div className={s.block_user}  key={u.id}>
            <div className={s.block_img}>
              <NavLink to={"/profile/" + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.img} alt=""/></NavLink>
            </div>
            <div className={s.user_name} >{u.name}</div>
            <div className={s.block_btn}>{u.followed ? ( <button className={s.btn} disabled={props.followingInProgress.some((id) => id === u.id)} onClick={() => {props.unfollow(u.id);}}> <span>Unfollow</span> </button>)
            : (<button className={s.btn} disabled={props.followingInProgress.some((id) => id === u.id)} onClick={() => {props.follow(u.id);}}> <span>Follow</span> </button>)}
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Users;
