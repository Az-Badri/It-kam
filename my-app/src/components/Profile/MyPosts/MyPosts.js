import React from 'react'
import '../ProfileComponent.module.css'
import './MyPosts.css'
import Post1 from'./Post1/Post1.js'

let MyPosts = (props) =>{
  let PostsElements = props.PostData.map( post =>
    <Post1 id={post.id} name = {post.name} age = {post.age} likes={post.likes} message={post.message} />
  )

let newPostElement = React.createRef();

let addPost = () =>{
    props.addPost();
  }

let onPostChange = () =>{
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return  (
      <div>
        <div className="newpost">
          <h4>New post?</h4>
            <div>
              <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
              <button onClick={addPost}>Add</button>
            </div>
        </div>
        <div className="posts">
          <h4>My posts</h4>
          {PostsElements}
        </div>
      </div>
    )
}

export default MyPosts