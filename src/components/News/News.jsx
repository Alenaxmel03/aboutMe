import React from "react";
import s from "./News.module.css";

const New = (props) => {
  return (
    <div className={s.col}>
      <div className={s.container}>
        <div className={s.front}>
          <div className={s.inner}>
            <p>{props.typeNew}</p>
          </div>
        </div>
        <div className={s.back}>
          <div className={s.inner}>
            <p>Latest world news  with photos and videos.</p>
          </div>
        </div>
        <div className={s.news_item}>
          <a href="">Read all news</a>
        </div>
      </div>
    </div>
  );
};

const News = (props) => {
  return (
    <div className={s.cols}>
      <New typeNew="Sports" />
      <New typeNew="Tourism" />
      <New typeNew="Humor" />
      <New typeNew="The science" />
      <New typeNew="Cinema" />
      <New typeNew="Style" />
      <New typeNew="Shopping" />
      <New typeNew="Games" />
      <New typeNew="Music" />
    
    </div>
  );
};

export default News;
