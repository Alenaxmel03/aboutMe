import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sideBar-reducer";
import usersReducer from "./user-reducer";
import  thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogsReducer,
    sideBarFriends: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;