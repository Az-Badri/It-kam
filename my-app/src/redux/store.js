import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let Store = {

    _AppState : {
        Profile: {
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
    },
        Messages: {
            
            DialogsData: [         
                {id:"1", name:"Brandon", face: "https://www.famousbirthdays.com/headshots/brandon-walsh-3.jpg"},
                {id:"2", name:"Claudia", face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTv3SBZ5NbVKy2gfCApljTt_1c5SkLuD9DGA&usqp=CAU"},
                {id:"3", name:"Cory", face: "https://static.boredpanda.com/blog/wp-content/uploads/2017/11/Jen-Profile__300.jpg"},
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

        },
        sideBar: {}

    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._AppState;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        this._AppState.Profile = profileReducer(this._AppState.Profile, action);
        this._AppState.Messages = dialogsReducer( this._AppState.Messages, action);
        this._callSubscriber(this._AppState);
       this._AppState.sideBar = sidebarReducer(this._AppState.sideBar, action);
    }
}
export default Store
window.Store = Store /* to access store globally */