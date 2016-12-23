import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
    // Use this if not using mapDispatchToProps.
    //this.props.dispatch(courseActions.createCourse(this.state.course));

    // Use this if using mapDispatchToProps.
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={ index }>{ course.title }</div>;
  }

  render() {
    //debugger;
    return (
      <div>
        <h1>Courses</h1>
        { this.props.courses.map(this.courseRow) }
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

CoursesPage.propTypes = {
  // By defining the mapDispatchToProps function, we no longer
  // need the dispatch propType.
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  //debugger;
  // The state passed in is whatever state is in our store.
  // The state property is whatever reducer alias we picked for that
  // particular reducer.
  // The ownProps parameter is this component's own props that is passed in.
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Long way of mapping dispatch.
    //createCourse: course => dispatch(courseActions.createCourse(course))

    // Short way of mapping dispatch.
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// The connect function uses one or two parameter functions and returns a function.
// That returned function is then used with our CoursesPage component.
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
