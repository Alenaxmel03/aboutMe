import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/content-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


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
      <div className={s.blockSend}>
        <div className={s.blockSend_input}>
          <div className={s.iconInput}>
            <i class="far fa-edit"></i>
          </div>
          <input
            type="text"
            id=""
            placeholder="Write something on this Page..."
          />
          <div className={s.blockSend_button}>
            <button className={s.btn}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.Posts}>
        <div className={s.firstPost}>
          <div className={s.imgPost}>
            <img
              src="https://images.unsplash.com/photo-1485992012525-5e80165c7046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80"
              alt=""
            />
          </div>
          <div className={s.blockPost}>
            <div className={s.myImage}>
              <img
                src="https://i.pinimg.com/564x/38/1b/06/381b0623eda223138f89bf2c4b312076.jpg"
                alt=""
              />
            </div>
            <div className={s.myPost}>
              Mark
              <p>
                Hi everyone! This is my first photo on the page. I will be very
                grateful if you write your opinion!
              </p>
            </div>
          </div>
        </div>
        <div className={s.blockComment}>
          <div className={s.iconComment}>
            <i class="fas fa-comments"></i>
          </div>
          <input onChange={onPostChange} type="text" ref={newPostElement} value={props.newPostText}  placeholder="Add your comment"
          />
          <div className={s.blockSend_button}>
            <button onClick={onAddPost} className={s.btn}>
              Add comment
            </button>
          </div>
        </div>

        <div>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
