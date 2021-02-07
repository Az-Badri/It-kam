const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {     
        DialogsData: [         
            {id:"1", name:"Brandon", face: "https://www.famousbirthdays.com/headshots/brandon-walsh-3.jpg"},
            {id:"2", name:"Claudia", face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTv3SBZ5NbVKy2gfCApljTt_1c5SkLuD9DGA&usqp=CAU"},
            {id:"3", name:"Cory", face: "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-19/s150x150/129046378_715459655766518_8222228259671767765_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_ohc=le0PI4AcbwsAX8CHaxo&tp=1&oh=6b14b2c8f8a9fefd5492ccfe2bdee7c4&oe=601E4C5F"},
            {id:"4", name:"Nick", face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb52FhQrN2KjorE4JCnP5NT-b7pQ0PYze_sw&usqp=CAU" },
            {id:"5", name:"Kennedy", face: "https://cdn141.picsart.com/339836464043201.jpg?type=webp&to=crop&r=256"},
            {id:"6", name:"Devorah", face: "https://yhstars.com/wp-content/uploads/2020/11/Devorah-Lazar-300x300.jpg" },
        ],   

        DialogsText: [
            {id:"1", text:"Hi, wanna collab?"},
            {id:"2", text:"hey sweetie"},
            {id:"3", text:"Whassup"},
            {id:"4", text:"Where are u dude"},
            {id:"5", text:"miss ya"},
            {id:"6", text:"listen to me, babe"},
        ],
        newMessageText: "",
}

let dialogsReducer = (state = initialState, action) =>{
    if(action.type === 'ADD-NEW-MESSAGE' ){
        let newMessage = {
            id: 3000,
            text: state.newMessageText,
        };
        state.DialogsText.push(newMessage);
        state.newMessageText = ' ';
    }else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT' ){
        state.newMessageText = action.newMessage;
    }  
return state;
}
export const addMessageActionCreator = () =>{
    return {type: ADD_NEW_MESSAGE}
}
export const changeMessageActionCreator = (text) =>{
    return {type:UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}
export default dialogsReducer