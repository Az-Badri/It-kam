import React from 'react'
import {AddPostActionCreator, ChangePostActionCreator} from './../../../redux/profile-reducer.js'
import MyPosts from'./MyPosts'

let MyPostsContainer = (props) =>{

let state = props.Store.getState();

let addPost = () =>{
    props.Store.dispatch(AddPostActionCreator());
  }

let onPostChange = (text) =>{
  let action = ChangePostActionCreator(text);
  props.Store.dispatch(action);

}

  return  (
      <MyPosts PostData={state.Profile.PostData} updateNewPostText={onPostChange} 
      addPost={addPost} newPostText={state.Profile.newPostText} />
    )
}

export default MyPostsContainer