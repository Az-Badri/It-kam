import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'


const DialogItem = (props) =>{
   return (
      <div className={s.dialog}>
         <NavLink to={"/dialogs/" + props.id}>
            <div>
               <img alt="user face" src={props.face}></img>
               {props.name}
            </div>
         </NavLink>
      </div>

   )
}

export default DialogItem