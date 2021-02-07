import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Nav/Nav'
import ProfileComponent from './components/Profile/ProfileComponent'
import DialogsContainer from './components/Dialogs/DialogsContainer.js'
import News from './components/News/News.js'
import Settings from './components/Settings/Settings.js'
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
          <Navbar DialogsData={props.state.Messages.DialogsData}/> 
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs'>
              <DialogsContainer Store={props.Store} dispatch={props.dispatch} newMessageText={props.state.Messages.newMessageText}
             DialogsText={props.state.Messages.DialogsText} DialogsData={props.state.Messages.DialogsData} />
          </Route>
          <Route exact path='/profile' render={
            () => < ProfileComponent Store={props.Store} /> }>
          </Route>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
     )
}

export default App;
