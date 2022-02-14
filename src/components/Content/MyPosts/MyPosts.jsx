import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/content-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Picture from "../../../assets/img/05.jpg";
import Person from "../../../assets/img/02.jpg";



const MyPosts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} like={p.like} name={p.name} img={p.img} key={p.id}/>
  ));
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let onAddPost = () => {
    props.addPost();
  };
  return (
    <div>
      <div className={s.Posts}>
        <div className={s.firstPost}>
          <div className={s.blockPost}>
            <div className={s.myImage}>
              <img
                src={Person}
                alt=""
              />
            </div>
            <div className={s.myPost}>
             <div className={s.myPost_name}>Mark </div> 
             <div className={s.myPost_times}>3 month ago</div>
              <p>
                Hi everyone! This is my first photo on the page. I will be very
                grateful if you write your opinion!
              </p>
            </div>
          </div>
          <div className={s.imgPost}>
            <img
              src={Picture}
              alt=""
            />
          </div>
        </div>
        <div className={s.blockComment}>
          <div className={s.iconComment}>
            <i class="fas fa-comments"></i>
          </div>
          <input onChange={onPostChange} type="text" ref={newPostElement} value={props.newPostText}  placeholder="Add your comment..."/>
          <div className={s.blockSend_button}>
            <button onClick={onAddPost} className={s.btn}> Add </button>
          </div>
        </div>

        <div>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
