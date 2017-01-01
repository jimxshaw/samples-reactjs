import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {

  /*
    Major pieces of a container component:
    1) constructor - initialize state and call bind functions, any
          functions that need to be bound to the this context.
    2) child functions - these are called by render.
    3) render function - ideally container components call one
          child component that contains markup.
    4) propTypes - these provider validation.
    5) redux connect and parameter function(s).
   */

  constructor(props, context) {
    super(props, context);

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
