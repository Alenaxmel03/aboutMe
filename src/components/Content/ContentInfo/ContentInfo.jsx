import React from "react";
import Prealoder from "../../common/Preloader/Prealoder";
import s from "./ContentInfo.module.css";
import ContentStatus from "./ContentStatus";
import ContentStatusWithHooks from "./ContentStatuWithHooks";

const ContentInfo = (props) => {
  if (!props.content) {
    return <Prealoder />;
  }

  return (
    <div className={s.gallery__items}>
      {/* <div className={s.gallery__item}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" /> 
      </div> */}
      <div>
        <div>
          <img src={props.content.photos.small} />
        </div>
        <div>{props.content.aboutMe}</div>
        {/* <ContentStatus status={props.status} updateStatus={props.updateStatus} /> */}
        <ContentStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};
export default ContentInfo;
