import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redux/redux-store.js'
import {Provider} from 'react-redux'


    ReactDOM.render(
      <React.StrictMode>
        <Provider store={Store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root') );


