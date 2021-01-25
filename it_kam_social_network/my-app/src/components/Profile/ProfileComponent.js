import React from 'react'
import s from './ProfileComponent.module.css'
import MyPosts from './MyPosts/MyPosts.js'

const ProfileInfo = (props) =>{
  return (
    <div>
      <div>
        <img class={s.faces} src={props.avatar_addr}></img>
      </div>
      <div class={s.description_block}>
        
      </div>
    </div>
    )
}

const ProfileComponent = (props) =>{
  return (
     <div>
       <img id={s.panorama} src="https://i.pinimg.com/originals/e2/20/0b/e2200b56afc9abe1472e54682a036d20.jpg"></img>
       <div className={s.ava_description}>
         <ProfileInfo avatar_addr="https://celebslifereel.com/wp-content/uploads/2018/05/Brooke-Bush.jpg" />
        <h1>Brook Bush</h1> 
       </div>
       <MyPosts newPostText={props.newPostText} addPost={props.addPost} PostData={props.PostData} />
     </div>
    )
}

export default ProfileComponent