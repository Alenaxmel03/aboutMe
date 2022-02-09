import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sideBar-reducer";

let store = {
  _state: {
    contentPage: {
      postData: [
        {
          id: 1,
          message: "Nice photo, take more pictures ... you are a real talent!",
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
          message: "I want to learn how to photograph, teach me",
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
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Anna",
          img: "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",
        },
        {
          id: 2,
          name: "Bob",
          img: "https://i.guim.co.uk/img/media/791c139fcb94e1094512b045e939a8ca9dceec75/0_635_4712_4706/master/4712.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=850d0cffdfb9434bcea77373896f7d40",
        },
        {
          id: 3,
          name: "John",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU",
        },
        {
          id: 4,
          name: "Edvard",
          img: "https://thumbs.dreamstime.com/b/portrait-young-man-sad-face-expression-gray-background-88854700.jpg",
        },
      ],
      messagesData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How  are you?" },
        { id: 3, message: "Sorry? I am late..." },
      ],
       newMessagBody: ""
    },
    sideBarFriends: {
      myFriends: [
        {
          id: 1,
          name: "Anna",
          img: "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",
        },
        {
          id: 2,
          name: "Bob",
          img: "https://i.guim.co.uk/img/media/791c139fcb94e1094512b045e939a8ca9dceec75/0_635_4712_4706/master/4712.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=850d0cffdfb9434bcea77373896f7d40",
        },
        {
          id: 3,
          name: "John",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU",
        },
        {
          id: 4,
          name: "Edvard",
          img: "https://thumbs.dreamstime.com/b/portrait-young-man-sad-face-expression-gray-background-88854700.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.contentPage = contentReducer( this._state.contentPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBarFriends = sidebarReducer(this._state.sideBarFriends, action);
    this._callSubscriber(this._state);
  },
};

export default store;
// window.store = store;
