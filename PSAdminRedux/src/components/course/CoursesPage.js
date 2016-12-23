import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    // Binding this keyword so that it's referring to the
    // component as opposed to the calling event handler.
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text"
               onChange={ this.onTitleChange }
               value={ this.state.course.title } />

        <input type="submit"
               onClick={ this.onClickSave }
               value="Save" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // The state passed in is whatever state is in our store.
  // The state property is whatever reducer alias we picked for that
  // particular reducer.
  // The ownProps parameter is this component's own props that is passed in.
  return {
    courses: state.courses
  };
}

// The connect function uses one or two parameter functions and returns a function.
// That returned function is then used with our CoursesPage component.
export default connect(mapStateToProps)(CoursesPage);
