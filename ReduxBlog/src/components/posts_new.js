// This is the component to create a new post at 
// route /posts/new.
import React, {Component} from "react";
// This imported reduxForm is nearly identical to the connect function 
// from react-redux, the reduxForm performs its functionality by taking 
// in a component, our PostsNew component. Because of this similarity, 
// we can actually use reduxForm to inject action creators into our 
// PostsNew component thus turning it into a container. The difference 
// between connect and reduxForm is that reduxForm take in one additional 
// argument, the form configuration object {form: "...", fields: ["...", "..."]}.
import {reduxForm} from "redux-form";
// Import the createPost action creator so that it can be used in
// the handleSubmit event handler in PostsNew component.
import {createPost} from "../actions/index";
// Import this to be able to use the Link JSX tag.
import {Link} from "react-router"; 

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
    // title's properties such as onChange={title.onChange} would have to be passed into 
    // <input> one by one. That'd be a hassle.
    // The handleSubmit event handler can take in an optional action creator 
    // that will be called with the properties from the form when the form is 
    // validated and submitted. 
    // Regarding validation, title.error the title comes from the fields object above 
    // and error is the message from our errors object in the below validate(values) 
    // function.   
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? "has-danger" : ""}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ""}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ""}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? "has-danger" : ""}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
        <button type="reset" className="btn btn-warning" id="clearBtn">Clear</button>
        <Link to="/" className="btn btn-danger" id="cancelBtn">Cancel</Link>
      </form>
    );
  }
}

// This form validation function takes in an object containing values from 
// our PostsNew form. This function will then be placed in reduxForm below 
// so that the fields from our form can flow into validate(values).
function validate(values) {
  // An errors empty object is initialized.
  const errors = {};

  // Conditionals are added to test the form values. For example, if our 
  // values object doesn't have a property called title, our errors object 
  // will get a new property called title with a message. 
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter categories";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

// PostsNew form configuration is placed here, letting redux-form know 
// the fields that it will take charge. First, we name our form PostsNew. 
// The form name does not have to be named the same as the component name. 
// Then we have an array containing our fields that will be on the form. 
// Once reduxForm executes, our returned jsx in the PostsNew component will 
// get access to several new this.props properties, include an important 
// one called this.props.handleSubmit. Add the validate function to reduxForm.
// Difference between connect & reduxForm:
// connect([mapStateToProps], [mapDispatchToProps]) while
// reduxForm([{form config}], [mapStateToProps], [mapDispatchToProps])...... 
export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"],
  validate
}, null, {createPost})(PostsNew);


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











