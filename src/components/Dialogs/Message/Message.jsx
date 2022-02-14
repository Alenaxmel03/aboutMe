import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.message_items}>
      <div className={s.message_item}>
        <div className={s.message_image}>
          <img src={props.img} alt="" />
        </div>
        <div className={s.message_content}>
          <div className={s.message_info}>
            <div className={s.name_user}>{props.name}</div>
            <div className={s.message_time}>{props.time}</div>
          </div>
          <div className={s.message}>{props.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
