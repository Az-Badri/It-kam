import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"  

const Dialogs = (props) =>{
let dialogsElements = props.DialogsData.map( dialog =>
   <DialogItem  id={dialog.id} name={dialog.name} face={dialog.face} />
)
let newMessageElement = React.createRef();

let messagesElements = props.DialogsText.map(message => 
   <Message text={message.text}/>
)
let addNewMessage = () =>{
    props.addNewMessage();
}
let onMessageChange = () =>{
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
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
                <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange} />
                <div>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs