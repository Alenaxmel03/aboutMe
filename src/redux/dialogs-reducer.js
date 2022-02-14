let UP_DATE_NEW_MESSAGE_BODY = "UP-DATE-NEW-MESSAGE-BODY";
let SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
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
    { id: 1, message: "Hi!", img:"https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg", name: "Anna", time: "13:15" },
    { id: 2, message: "Sorry for not answering for such a long time", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU" , name: "John", time: "13:31"},
    { id: 3, message: "Sorry? I am late...", img:"https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",name: "Anna", time: "14:43"},
    { id: 3, message: "Have you been to an interview?", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU" , name: "John", time: "14:50"},
    { id: 3, message: "Yes, everything went well", img:"https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",name: "Anna", time: "15:01"},
    { id: 3, message: "I'm very happy for you! I hope you get the job, you deserve it.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU" , name: "John", time: "15:07"},
    { id: 3, message: "Maybe we can meet and I can tell you all about it in person! I have so much news, and I'll tell you how the interview went ", img:"https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",name: "Anna", time: "15:11"},
  ],
   newMessagBody: ""
};

 const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UP_DATE_NEW_MESSAGE_BODY:
          return  {
            ...state,
            newMessagBody:action.body
          };
        case SEND_MESSAGE:
          let body = state.newMessagBody;
         return {
            ...state,
            newMessagBody: "",
            messagesData: [...state.messagesData, {id: 4, message: body, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLihRGzIm5JzNQgROkf5hvBAOEex7iGFgGMg&usqp=CAU",name: "John", time: "18:33"}]
          };
          default:
              return state;
      }
}


// =======DIALOGS=====MESSAGE===========
export const updateNewMessageBodyCreator = (msg) => {
    return {
      type: UP_DATE_NEW_MESSAGE_BODY,
      body: msg
    }
  }
  export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  }
export default dialogsReducer;