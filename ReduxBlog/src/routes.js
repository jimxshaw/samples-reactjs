// We will list out the mapping of which url belong to which component.
import React from "react";

// Route is the object that defines a match between a url and a component.
import {Route, IndexRoute} from "react-router";
import App from "./components/app";

const Greeting = () => {
  return <div>"Hello!"</div>
};

// Route JSX tag is where we house our paths and components that we want to share.
// This maps the route of / to the component of App. Whenever users are at /, show the
// App component.
// In order for react-router in index.js to know about the routing rules, we have to 
// export them. The routes would then be imported in index.js.
// Nested routes can exist. Child components are passed into the parent component as 
// this.props.children. In order for child components to render within the parent 
// component, the line {this.props.children} must be added within the parent component's
// returned JSX. 
export default ( 
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);














