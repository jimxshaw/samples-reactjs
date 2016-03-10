// This is the component to show a particular post by its id.
import React, {Component} from "react";

class PostsShow extends Component {
  render() {
    return <div>Show post {this.props.params.id}</div>;
  }
}

export default PostsShow;











