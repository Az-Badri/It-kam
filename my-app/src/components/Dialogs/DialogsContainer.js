import React from 'react'
import {addMessageActionCreator, changeMessageActionCreator} from './../../redux/dialogs-reducer.js'
import Dialogs from './../Dialogs/Dialogs.js'

const DialogsContainer = (props) =>{

let state = props.Store.getState();

let onMessageClick = () =>{
    props.Store.dispatch(addMessageActionCreator());
}
let onNewMessageChange = (message) =>{
    let action = changeMessageActionCreator(message);
    props.Store.dispatch(action);
}

    return (
        <Dialogs DialogsData={state.Messages.DialogsData} 
        DialogsText={state.Messages.DialogsText} 
        updateNewMessage={onNewMessageChange} 
        addMessage={onMessageClick} 
        newMessageText={state.Messages.newMessageText} />
    )
}

export default DialogsContainer