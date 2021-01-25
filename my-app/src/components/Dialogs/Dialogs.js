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

    return (
        <div class={s.dialogs}>
            <div className={s.dialogUsers}>
              {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs