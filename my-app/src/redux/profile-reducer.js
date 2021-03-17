const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    PostData: [
    {
        id: 0,
        name: 'Azamat',
        age:  '22',
        likes: 15,
        message: 'im just a humaaan',
    },

    {
        id: 1,
        name: 'Robot',
        age:  'eternity',
        likes: 100,
        message: 'OBEY!',
    },
],
newPostText: 'put your text in here',
}

let profileReducer = (state = initialState, action) =>{
    switch (action.type){ 
        case ADD_POST: {
            let newPost = {
                id: 2,
                likes: 0,
                message: state.newPostText,
            };
            let stateCopy = {...state};
            stateCopy.PostData= [...state.PostData];
            stateCopy.PostData.push(newPost);
            stateCopy.newPostText = ' ';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
         
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
}
}

export const ChangePostActionCreator = (text) =>{
    return {  
              type: UPDATE_NEW_POST_TEXT, 
              newText: text 
          }
};
export const AddPostActionCreator = () => {
    return {  type: ADD_POST  }
}

export default profileReducer