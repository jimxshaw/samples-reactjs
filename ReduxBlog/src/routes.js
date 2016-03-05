// We will list out the mapping of which url belong to which component.
import React from "react";

// Route is the object that defines a match between a url and a component.
import {Route, IndexRoute} from "react-router";
import App from "./components/app";

// This maps the route of / to the component of App. Whenever users are at /, show the
// App component.
// In order for react-router in index.js to know about the routing rules, we have to 
// export them. The routes would then be imported in index.js. 
export default ( 
  <Route path="/" component={App} />
);














