import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { loadState, saveState } from './LocalStorage';

// import * as serviceWorker from './serviceWorker';


//runs a function to check local storage for a serialized object called 'state' from LocalStorage.js
const persistedStore = loadState(); 

const store = createStore(
  rootReducer,
  persistedStore,
  applyMiddleware(thunk, logger),  
);

//updates the redux store to match the state object
store.subscribe(() => {
  saveState(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
