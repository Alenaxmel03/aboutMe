import React, { useEffect, useState } from "react";
import s from "./ContentInfo.module.css";

const ContentStatusWithHooks = (props) => {
  // let stateWithSetState = useState(false); 
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  },[props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus( e.currentTarget.value);
  };


  return (
    <div  className={s.status_block}>
      {!editMode && (
        <div className={s.status}> 
          <span onDoubleClick={activateEditMode}>
            {props.status || "-----"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} 
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
          />
        </div>
      )}
      <div className={s.statusChange}>&#40; if you want to change status, then click on it &#41;</div>
    </div>
  );
};

export default ContentStatusWithHooks;
