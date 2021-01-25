import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render'
import AppState from './redux/state';

rerenderEntireTree(AppState);

reportWebVitals();
