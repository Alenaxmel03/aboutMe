import React from "react";
import Prealoder from "../../common/Preloader/Prealoder";
import s from "./ContentInfo.module.css";
import ContentStatusWithHooks from "./ContentStatuWithHooks";
import logo from "../../../assets/img/user.png";

const ContentInfo = (props) => {
  if (!props.content) {
    return <Prealoder />;
  }

  return (
    <div className={s.gallery__items}>
      <div className={s.gallery__item_avatar}>
        <div>
          <img src={props.content.photos.small || logo} className={s.avatar} />
        </div>
        <div className={s.block_contacts}>
          <ContentData content={props.content} />
        </div>
      </div>
      <div className={s.gallery__item_info}>
        <div className={s.name}>
          <span>{props.content.fullName}</span>{" "}
        </div>
        <ContentStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        {Object.keys(props.content.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.content.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}>
      {contactTitle}: <span>{contactValue}</span>
    </div>
  );
};

const ContentData = ({ content }) => {
  return (
    <div>
      <div className={s.block_info}>
        {" "}
        Looking for a job: <span>
          {content.lookingForAJob ? "Yes" : "No"}{" "}
        </span>{" "}
      </div>
      <div className={s.block_info}>
        {content.aboutMe && (
          <div>
            My professional skills:{" "}
            <span>{content.lookingForAJobDescription}</span>
          </div>
        )}
      </div>
      <div className={s.block_info}>
        About me: <span> {content.aboutMe}</span>
      </div>
    </div>
  );
};
export default ContentInfo;
