// This is a class component that will serve as a container, not functional component.
// Steps to creating a container:
// 1) import connect.
// 2) import action creator. 
// 3) define mapDispatchToProps function.
// 4) connect mapDispatchToProps to the component. 
import React, {Component} from "react";
import {connect} from "react-redux";
//import {bindActionCreators} from "redux";

// The link component is how we can link one component to another by route. How this 
// component is used is in the form of a <Link> JSX tag, akin to the <a> html tag.
import {Link} from "react-router";
// This is the action creator we want to call within componentWillMount.
import {fetchPosts} from "../actions/index";

class PostsIndex extends Component {
  // We want to call an action creator every time our url changes. To do this we need 
  // a lifecycle method. Our componentWillMount method is a lifecycle method.
  // If we specifically define a method called componentWillMount then react will 
  // call this automatically whenever a component is about to be rendered to the DOM 
  // for the first time. It will not be called on subsequent re-renders though. Since, 
  // componentWillMount will only ever be called once, it's a great place to put our 
  // action creators to fetch our needed data.
  // Essentially, whenever the PostsIndex component is about to mount, go fetch the 
  // list of blog posts from the backend web api. 
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }

// // connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// export default connect(null, mapDispatchToProps)(PostsIndex);

// To cut down on boilerplate code at the cost of code readability, simply add
// the below line. By passing in {propsName: actionCreator}, we won't need to 
// import {bindActionCreators} anymore, write out a mapDispatchToProps 
// function or pass mapDispatchToProps into connect anymore.
export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
















