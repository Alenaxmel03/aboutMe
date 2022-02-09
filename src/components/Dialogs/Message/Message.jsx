import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props) => {
  return (// <div>
    <div className={s.message_items}>
      {/* <div className={s.message_item}>
        <div className={s.message_image}>
          <img src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg" alt=""/>
        </div>
        <div className={s.message_content}>
        <div className={s.message_info}>
          <div className={s.name_user}>Anna</div>
          <div className={s.message_time}>13:01</div>
        </div>
        <div className={s.message_text}>Hi how are you???</div>
        </div>
      </div>
    </div> */}
   <div className={s.message}>{props.message}</div> 
  </div>)
};



export default Message;
