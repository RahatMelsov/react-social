import reportWebVitals from './reportWebVitals';
import State from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPost, updatePostMessage, updateDialogsMessage, addMessage, subscriber} from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerender = ()=> {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
          <App posts={State.postPage.postData} 
              users={State.MessagePage.usersData} 
              dialogs={State.MessagePage.dialogsData}
              newMessageData={State.MessagePage.newMessageData}
              updateDialogsMessage={updateDialogsMessage}
              addMessage={addMessage}
              addPost={newPost} 
              newPostMessage={State.postPage.newPostMessage}
              updatePostMessage = {updatePostMessage}/>
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerender()

subscriber(rerender)

reportWebVitals();
