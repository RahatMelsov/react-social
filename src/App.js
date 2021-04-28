import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import News from './components/News/news';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <div className="app-wrapper-header">< Header /></div>
      <div className="app-wrapper-navbar"> < Navbar /></div>
      <div className="app-wrapper-content">
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/News' component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
