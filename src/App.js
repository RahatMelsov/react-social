import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Profile from './components/profile';

const App = () => {
  return (
    <div className="app-wrapper">
        < Header/>
        < Navbar/>
        < Profile/>
    </div>
  );
}

export default App;
