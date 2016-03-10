// This is the component to show a particular post by its id.
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
// We make use of our action creator that fetches a single post from our 
// backend web api. The deletePost action creator needs to be imported 
// so when we're viewing a particular post, we can delete it as well.
import {fetchPost, deletePost} from "../actions/index";
import {Link} from "react-router";


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

  static contextTypes = {
    router: PropTypes.object
  };
  // A delete functionality event handler that uses our delete post action 
  // creator. It will then be bounded to the Delete Post button. Remember, 
  // event handlers must bind this keyword in the JSX tag where the handler 
  // will reside. Once, the post has been deleted, we want to automatically 
  // re-route back to index. For dynamic routing, we must once again, do like 
  // we did in posts_new.js, create our contextTypes static method that has 
  // access to the router of react-router. Then use router's push method to 
  // re-route to index. 
  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push("/");
      });
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
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button 
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

// Our action creators are injected into connect.
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);











