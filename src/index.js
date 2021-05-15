import reportWebVitals from './reportWebVitals';
import Store from './components/redux/state_redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerender = (store)=> {
  debugger;
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
          <App state={store} 
          dispatch={ Store.dispatch.bind(Store)} />
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerender(Store.getState())

Store.subscribe(() => {
  let state = Store.getState();
  rerender(state)
})

reportWebVitals();
