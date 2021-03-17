import React from 'react'
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom'

let Navbar = (props) =>{
/*   let friendElements = props.DialogsData.filter(friend =>(friend.id > 0 && friend.id < 4 )).map(friend =>
    <img alt="friend" id={friend.id} name={friend.name} src={friend.face} />
 )
  let arrlength = (storage) =>{
    let counter = 0;
    for (const obj of storage)
        if (obj) 
          counter++;
    return(counter);
}
 
let notification = arrlength(props.DialogsData);*/
    return (
    <nav className={c.nav}>
        <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/dialogs">Messages{/*  ({notification}) */} </NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
        <div className={c.friendSection}>
          <h1>Friends</h1>
        {/*   {friendElements} */}
        </div>
     </nav>
    )
}

export default Navbar