import React from 'react'
import {addMessageActionCreator, changeMessageActionCreator} from './../../redux/dialogs-reducer.js'
import Dialogs from './../Dialogs/Dialogs.js'
import StoreContext from './../../StoreContext'

const DialogsContainer = () =>{

    return (
        <StoreContext.Consumer>
        {   Store =>{
                let state = Store.getState();

                let onMessageClick = () =>{
                    Store.dispatch(addMessageActionCreator());
                }
                let onNewMessageChange = (message) =>{
                    let action = changeMessageActionCreator(message);
                    Store.dispatch(action);
                }

            return  <Dialogs DialogsData={state.Messages.DialogsData} 
                    DialogsText={state.Messages.DialogsText} updateNewMessage={onNewMessageChange} 
                    addMessage={onMessageClick} newMessageText={state.Messages.newMessageText} />
            }
        }
        </StoreContext.Consumer>
        )
}

export default DialogsContainer