import { contentAPI, usersAPI } from "../api/api";

let ADD_POST = "ADD-POST";
let UP_DATE_NEW_POST_TEXT = "UP-DATE-NEW-POST-TEXT";
let SET_USER_CONTENT = "SET-USER-CONTENT";
let SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    {
      id: 1,
      message: "Nice photo, take more pictures !",
      like: 14,
      name: "Bob",
      img: "https://i.guim.co.uk/img/media/791c139fcb94e1094512b045e939a8ca9dceec75/0_635_4712_4706/master/4712.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=850d0cffdfb9434bcea77373896f7d40",
    },
    {
      id: 2,
      message: "It's my first post",
      like: 25,
      name: "John",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU",
    },
    {
      id: 3,
      message: "I want to learn how to photograph",
      like: 55,
      name: "Edvard",
      img: "https://thumbs.dreamstime.com/b/portrait-young-man-sad-face-expression-gray-background-88854700.jpg",
    },
    {
      id: 3,
      message:
        "This is my first time on your page, and I am very glad that I found this page.",
      like: 5,
      name: "Anna",
      img: "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",
    },
  ],
  newPostText: "",
  content: null,
  status: "",
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: "Mike",
        message: state.newPostText,
        img: "https://jooinn.com/images/man-31.jpg"
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
        
      };
    }
    case UP_DATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_CONTENT: {
      return {
        ...state,
        content: action.content,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const updateNewPostActionCreator = (text) => ({
  type: UP_DATE_NEW_POST_TEXT,
  newText: text,
});
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserContent = (content) => ({
  type: SET_USER_CONTENT,
  content: content,
});
export const getUserContent = (userId) => async (dispatch) => {
  let response = await usersAPI.getContent(userId);
    dispatch(setUserContent(response.data));
  };


export const setStatus = (status) => ({ type: SET_STATUS, status: status });
export const getStatus = (userId) =>  async (dispatch) => {
  let response = await contentAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await contentAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

export default contentReducer;
