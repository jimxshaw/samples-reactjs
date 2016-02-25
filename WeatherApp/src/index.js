import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// The role middleware plays with redux is that it has the ability to 
// block, modify or let pass through actions as they are created before they 
// hit a reducer. Middleware serves as the gatekeeper prior to reaching reducers.
import ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';

// Imported ReduxPromise middleware and inserted it into our applyMiddleware function. 
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
