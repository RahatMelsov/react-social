import reportWebVitals from './reportWebVitals';
import Store from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerender = ()=> {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
          <App state={Store.getState} 
          dispatch={Store.dispatch.bind(Store)} />
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerender()

Store.subscriber(rerender)

reportWebVitals();
