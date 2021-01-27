
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
                {id:"3", name:"Cory", face: "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/129046378_715459655766518_8222228259671767765_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=f7dHGsd5nKwAX9-XXMk&tp=1&oh=8fba5574231278d1932181db3229c252&oe=6016635F"},
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
            newMessageText: 'type here',

        },

    },

    get getState() {
        return this._AppState;
    },

    addPost()   {
        let newPost = {
            id: 2,
            likes: 0,
            message: Store._AppState.Profile.newPostText,
        };
        this._AppState.Profile.PostData.push(newPost);
        this._AppState.Profile.newPostText = ' ';
        this._callSubscriber(this._AppState);
    },

    updateNewPostText(newText) {
        this._AppState.Profile.newPostText = newText;
        this._callSubscriber(this._AppState);
    },

    addNewMessage() {
        let newMessage = {
            id: 3000,
            text: Store._AppState.Messages.newMessageText,
        };
        this._AppState.Messages.DialogsText.push(newMessage);
        this._AppState.Messages.newMessageText = ' ';
        this._callSubscriber(this._AppState);
    },

    updateNewMessageText(newMessage) {
        this._AppState.Messages.newMessageText = newMessage;
        this._callSubscriber();
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}
export default Store
window.Store = Store /* to access store globally */