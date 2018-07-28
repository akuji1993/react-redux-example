import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'; 
import { createStore, combineReducers } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import initialState from './initialState';

// Create Redux store 
const store = createStore(
  combineReducers({
    root: rootReducer
  }), 
  initialState);

// Initialize React rendering
ReactDOM.render(
  // Provide the redux store to React components
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

// Accept hot module replacement
module.hot.accept();