import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} src={d.img} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} img={m.img} name={m.name} time={m.time}/>
  ));

  let newMessagesBody = state.newMessagBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };



  return (
    <div className={s.dialogs}>
      <div className={s.users_items}>{dialogsElements}</div>
      <div className={s.messages_items}>
        <div  className={s.mes}>{messagesElements}</div>
        <div>
          <div className={s.input}>
            <input
              value={newMessagesBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message..."
            ></input>
          </div>
          <div>
            <button  className={s.btn} onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
