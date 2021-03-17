import { combineReducers, createStore } from 'redux'
import  profileReducer from "./profile-reducer"
import  dialogsReducer from "./dialogs-reducer"
import  sidebarReducer from "./sidebar-reducer"

let reducers = combineReducers(
    {
        Profile: profileReducer,
        Messages: dialogsReducer,
        sideBar: sidebarReducer, 
    }
)

let Store = createStore(reducers);

export default Store;