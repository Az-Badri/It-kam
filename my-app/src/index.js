import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redux/redux-store.js'

let rerenderEntireTree = () =>{
    ReactDOM.render(
      <React.StrictMode>
        <App  Store={Store} state={Store.getState()} dispatch={Store.dispatch.bind(Store) } />
      </React.StrictMode>,
      document.getElementById('root')
    );
}
rerenderEntireTree(Store.getState());
Store.subscribe(() => {
  let state = Store.getState;
  rerenderEntireTree(state)
});
reportWebVitals();
