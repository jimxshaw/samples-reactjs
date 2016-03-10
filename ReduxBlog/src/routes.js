// We will list out the mapping of which url belong to which component.
import React from "react";

// Keep in mind that react-router gives users the impression that they're navigating 
// to different pages when in reality they're on the same page.  
// Route is the object that defines a match between a url and a component.
// IndexRoute is a helper that behaves like a route but will be shown whenever the url 
// matches up with a path defined by the parent but not one of the children. 
import {Route, IndexRoute} from "react-router";
import App from "./components/app";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

// Route JSX tag is where we house our paths and components that we want to share.
// This maps the route of / to the component of App. Whenever users are at /, show the
// App component.
// In order for react-router in index.js to know about the routing rules, we have to 
// export them. The routes would then be imported in index.js.
// Nested routes can exist. Child components are passed into the parent component as 
// this.props.children. In order for child components to render within the parent 
// component, the line {this.props.children} must be added within the parent component's
// returned JSX. 
// The IndexRoute JSX tag does not need a path. By using IndexRoute, if the route is / 
// show App and PostsIndex because / is the parent. If the route is / plus a path with 
// a regular <Route> tag then simply show App and that path's connected component, 
// IndexRoute will be ignored in this instance. 
export default ( 
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);














