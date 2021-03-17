import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"  

const Dialogs = (props) =>{

let dialogsElements = props.DialogsData.map( dialog =>
   <DialogItem  id={dialog.id} name={dialog.name} face={dialog.face} />
)

let messagesElements = props.DialogsText.map(message => 
   <Message text={message.text}/>
)
let addNewMessage = () =>{
    props.addMessage();
}

let onMessageChange = (event) =>{
    let body = event.target.value;
    props.updateNewMessage(body);
}

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogUsers}>
                {dialogsElements}
                </div>
                <div className={s.messages}>
                {messagesElements}
                </div>
            </div>
            <div className={s.newMessage}>
                <h4>New Message:</h4>
                <textarea  placeholder='enter your message' value={props.newMessageText} onChange={onMessageChange} />
                <div>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs