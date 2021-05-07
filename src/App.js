import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import News from './components/News/news';
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-header">< Header /></div>
      <div className="app-wrapper-navbar"> < Navbar /></div>
      <div className="app-wrapper-content">
        <Route path='/profile' render={()=>  <Profile postData={props.posts} addPost={props.addPost} newPostMessage={props.newPostMessage} updatePostMessage={props.updatePostMessage}/>} />
        <Route path='/dialogs' render={()=>  <Dialogs usersData={props.users} dialogsData={props.dialogs} newMessageData={props.newMessageData} updateDialogsMessage={props.updateDialogsMessage} addMessage={props.addMessage}/>} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/News' component={News} />
      </div>
    </div>
  );
}

export default App;
