import React from 'react'
import StoreContext from '../../../StoreContext.js';
import {AddPostActionCreator, ChangePostActionCreator} from './../../../redux/profile-reducer.js'
import MyPosts from'./MyPosts'

let MyPostsContainer = (props) =>{


  return  (
    <StoreContext.Consumer>
      { (Store) =>
        {
        let state = Store.getState(); 
        let addPost = () =>{
          Store.dispatch(AddPostActionCreator());
        }
        let onPostChange = (text) =>{
        let action = ChangePostActionCreator(text);
        Store.dispatch(action);
        }

        return <MyPosts PostData={state.Profile.PostData} updateNewPostText={onPostChange} 
          addPost={addPost} newPostText={state.Profile.newPostText} /> 
      }
    }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer