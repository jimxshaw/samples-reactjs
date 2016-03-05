import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Import the routing rules that we exported from routes.js.
import routes from "./routes";
// Router decides what react components will render whenever the url changes. The other 
// object browserHistory tells react-router how to interpret changes to the url. For 
// example, with a sample url like www.blog.com/posts/5, browserHistory will work with 
// react-router to communicate what's to be done with the /posts/5 portion of the url. Also, 
// browserHistory has nothing to do with the separate independent history library that works 
// behind the scenes with react-router and react. 
import { Router, browserHistory } from "react-router";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Even though the history library has nothing to do with browserHistory object, they still 
// work together. History takes in browserHistory and kicks it along to react-router. The 
// routes will be defined by the routing rules we imported from routes.js.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
