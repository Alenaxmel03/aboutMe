import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/content-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostActionCreator(text));
//         };

//         let addPost = () => {
//          store.dispatch(addPostActionCreator());
//         };

//        return  <MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         postData={state.contentPage.postData}
//         newPostText={state.contentPage.newPostText}
//       />
//       }
//       }
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    postData: state.contentPage.postData,
    newPostText : state.contentPage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText : (text) => {dispatch(updateNewPostActionCreator(text));},
    addPost : () => {dispatch(addPostActionCreator());}
  } 
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
