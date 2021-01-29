const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let dialogsReducer = (state, action) =>{
    if(action.type === 'ADD-NEW-MESSAGE' ){
        let newMessage = {
            id: 3000,
            text: state.newMessageText,
        };
        state.DialogsText.push(newMessage);
        state.newMessageText = ' ';
    }else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT' ){
        state.newMessageText = action.newMessage;
    }  
return state;
}
export const addMessageActionCreator = () =>{
    return {type: ADD_NEW_MESSAGE}
}
export const changeMessageActionCreator = (text) =>{
    return {type:UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}
export default dialogsReducer