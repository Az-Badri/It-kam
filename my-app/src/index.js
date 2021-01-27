import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redux/state'

let rerenderEntireTree = () =>{
    ReactDOM.render(
      <React.StrictMode>
        <App  Store={Store} state={Store.getState}
          updateNewMessageText={Store.updateNewMessageText.bind(Store)} addNewMessage={Store.addNewMessage.bind(Store)} 
          updateNewPostText={Store.updateNewPostText.bind(Store)}  addPost={Store.addPost.bind(Store)}
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(Store.getState);
Store.subscribe(rerenderEntireTree);
reportWebVitals();
