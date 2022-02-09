import React from "react";
import s from "./Post.module.css";



const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.info}>
        <div className={s.block__img}>
          <img src={props.img} />
        </div>
        <div className={s.infoText}>
          <div className={s.person}>{props.name}</div>
          <div className={s.mes}>{props.message}</div>
        </div>
      </div>
      <div className={s.like}>
        Like <span>{props.like}</span>{" "}
      </div>
    </div>
  );
};

export default Post;
