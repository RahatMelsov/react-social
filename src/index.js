import reportWebVitals from './reportWebVitals';
import Store from './components/redux/state_redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext';

let rerender = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={Store}>
          <App/>
        </StoreContext.Provider>
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
