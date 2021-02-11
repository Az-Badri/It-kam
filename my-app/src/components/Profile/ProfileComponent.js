import React from 'react'
import s from './ProfileComponent.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const ProfileInfo = (props) =>{
  return (
    <div>
      <div>
        <img alt="faces" className={s.faces} src={props.avatar_addr}></img>
      </div>
      <div className={s.description_block}>
        
      </div>
    </div>
    )
}

const ProfileComponent = (props) =>{
  return (
     <div>
       <img alt="panorama" id={s.panorama} src="https://i.pinimg.com/originals/e2/20/0b/e2200b56afc9abe1472e54682a036d20.jpg"></img>
       <div className={s.ava_description}>
         <ProfileInfo alt="face_avatar" avatar_addr="https://celebslifereel.com/wp-content/uploads/2018/05/Brooke-Bush.jpg" />
        <h1>Brook Bush</h1> 
       </div>
       <MyPostsContainer />
     </div>
    )
}

export default ProfileComponent