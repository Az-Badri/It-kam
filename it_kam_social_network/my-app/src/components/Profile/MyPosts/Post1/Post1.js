import React from 'react'
import './Post1.css'

let Post1 = (props) =>{
    return (
        <div>
            <p>{props.name} {props.age}</p>
            <p>{props.message}</p>
            <p class='likes'>likes: {props.likes}</p>
            <button>Like</button>
            <button>Comment</button>
            <button>Remove</button>
        </div>
      )
}

export default Post1