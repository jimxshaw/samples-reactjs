// This is the component to create a new post at 
// route /posts/new.
import React, {Component} from "react";
// This imported reduxForm is nearly identical to the connect function 
// from react-redux.
import {reduxForm} from "redux-form";

// PostsNew uses redux-form. How this component works with that package 
// is this. PostsNew tells react-form to keep track of three fields(inputs):
// title, categories, content. Next, react-form takes the instructions and 
// places its own set of rules to each field so that the fields will know 
// what to do when they're updated. React-form also takes charge of the 
// PostsNew form submission functionality. 
class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// PostsNew form configuration is placed here, letting redux-form know 
// the fields that it will take charge. First, we name our form PostsNew. 
// The form name does NOT have to be named the same as the component name. 
// Next is an array containing our fields that will be on the form.
export default reduxForm({
  form: "PostsNew",
  fields: ["title", "categories", "content"]
})(PostsNew);


/*
Behind the scenes, when users type something in PostsNew form..... the changes 
will be tracked on our application state. It will look something like:
state === {
  form: {
    PostsNew: {
      title: "user input title",
      categories: "user input categories",
      content: "user input content"
    }
  }
};

Note that the form key within state is the form key within our rootReducer in
reducers/index.js.
*/











