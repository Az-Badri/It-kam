import React from 'react'
import {AddPostActionCreator, ChangePostActionCreator} from './../../../redux/profile-reducer.js'
import MyPosts from'./MyPosts'
import {connect} from 'react-redux'
 
let mapStateToProps = (State) =>{
  return {
    PostData: State.Profile.PostData,
    newPostText: State.Profile.newPostText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    addPost: () =>{
      dispatch(AddPostActionCreator());
      },
    onPostChange: (text) =>{
      let action = ChangePostActionCreator(text);
      dispatch(action);
      },
  }
}

let MyPostsContext = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContext