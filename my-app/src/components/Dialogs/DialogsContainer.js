import React from 'react'
import {addMessageActionCreator, changeMessageActionCreator} from './../../redux/dialogs-reducer.js'
import Dialogs from './../Dialogs/Dialogs.js'
import {connect} from 'react-redux'

let mapStateToProps = (State) =>{
    return{
        DialogsData: State.Messages.DialogsData,
        DialogsText: State.Messages.DialogsText,
        newMessageText: State.Messages.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    addMessage:() => { 
        dispatch(addMessageActionCreator())
    },
    updateNewMessage:(message) =>  {
        let action = changeMessageActionCreator(message)
        dispatch(action)
    },
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;