import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Router decides what react components will render whenever the url changes. The other 
// object browserHistory tells react-router how to interpret changes to the url. For 
// example, with a sample url like www.blog.com/posts/5, browserHistory will work with 
// react-router to communicate what's to be done with the /posts/5 portion of the url. Also, 
// browserHistory has nothing to do with the separate independent history library that works 
// behind the scenes with react-router and react. 
import { Router, browserHistory } from "react-router";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));
