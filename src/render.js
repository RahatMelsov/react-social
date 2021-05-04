import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPost} from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerender = (State)=> {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
          <App posts={State.postPage.postData} users={State.MessagePage.usersData} dialogs={State.MessagePage.dialogsData} addPost={newPost}/>
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}