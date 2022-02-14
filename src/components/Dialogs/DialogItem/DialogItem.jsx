import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.item + " " + s.active}>
      <div className={s.item_image}>
        <img src= {props.src} alt=""/>
      </div>
      <div className={s.item_user}> <NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink></div>
    </div>
  ); 
};



export default DialogItem;
