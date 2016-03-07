// This is the component to create a new post at 
// route /posts/new.
import React, {Component} from "react";
// This imported reduxForm is nearly identical to the connect function 
// from react-redux, the reduxForm performs its functionality by taking 
// in a component, our PostsNew component.
import {reduxForm} from "redux-form";

// PostsNew uses redux-form. How this component works with that package 
// is this. PostsNew tells react-form to keep track of three fields(inputs):
// title, categories, content. Next, react-form takes the instructions and 
// places its own set of rules to each field so that the fields will know 
// what to do when they're updated. React-form also takes charge of the 
// PostsNew form submission functionality. 
class PostsNew extends Component {
  render() {
    //// The below const lines are equivalent. The second syntax condenses lines.
    // handleSubmit property comes from reduxForm. 
    //const handleSubmit = this.props.handleSubmit;
    //const title = this.props.fields.title;
    //const categories = this.props.fields.categories;
    //const content = this.props.fields.content;

    // The rules reduxForm are in a property called fields, of which we'll bind 
    // our three declared form fields.
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    // What handleSubmit does is that it tells reduxForm that the user is trying to 
    // submit this form right now so go validate the form and if the form isn't 
    // valid, stop the submission. E.g. the user forgot to input a post title, 
    // event handler handleSubmit would block the form from being submitted.
    // The {...title} means it's destructuring the title object into its keys and values 
    // and pass all of them into the <input>. If {...title} syntax isn't used, then 
    // title's methods such as onChange={title.onChange} would have to be passed into 
    // <input> one by one. That'd be a hassle.   
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// PostsNew form configuration is placed here, letting redux-form know 
// the fields that it will take charge. First, we name our form PostsNew. 
// The form name does not have to be named the same as the component name. 
// Then we have an array containing our fields that will be on the form. 
// Once reduxForm executes, our returned jsx in the PostsNew component will 
// get access to several new this.props properties, include an important 
// one called this.props.handleSubmit.
export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"]
})(PostsNew);


/*
Behind the scenes, when users type something in PostsNew form..... the changes 
will be tracked on our application state. It will look something like:
state === {
  form: {
    PostsNewForm: {
      title: "user input title",
      categories: "user input categories",
      content: "user input content"
    }
  }
};

Note that the form key within state is the form key within our rootReducer in
reducers/index.js.
*/











