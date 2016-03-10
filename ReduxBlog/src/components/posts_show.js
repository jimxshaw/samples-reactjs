// This is the component to show a particular post by its id.
import React, {Component} from "react";
import {connect} from "react-redux";
// We make use of our action creator that fetches a single post from our 
// backend web api. 
import {fetchPost} from "../actions/index";

class PostsShow extends Component {
  // We're using the componentWillMount lifecycle method again so that our 
  // fetch single post action creator will kick off when PostsShow component 
  // renders for the first time. The sequence is this, users on index clicks 
  // on one post in our list of posts. This PostsShow component renders for 
  // the first time, kicks off fetch one post by id action creator, the post 
  // is retrieved and this component's render method executes. The post's id 
  // is captured from the url in the form of params.id.
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const {post} = this.props;
    // Components will render instantly regardless if the data from our backend 
    // web api is retrieved yet. Data retrieval could take millisecond to several 
    // seconds. We have to add a conditional to take into account this scenario. 
    // If a post isn't retrieved yet, we display a messaged "Loading...". 
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);











