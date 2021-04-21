import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-wrapper-header">< Header/></div>
      <div className="app-wrapper-navbar"> < Navbar/></div>
      {/* <div className="app-wrapper-content"> < Dialogs/></div> */}
        <div className="app-wrapper-content"> < Profile/></div>
    </div>
  );
}

export default App;
