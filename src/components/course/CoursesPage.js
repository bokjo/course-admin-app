/**
 * Created by bstojchevski on 5/29/2017.
 */
import React, { PropTypes }   from "react";
import { connect }            from  "react-redux";
import * as courseActions     from "../../actions/courseActions";
import { bindActionCreators } from "redux";
import CourseList             from "./CourseList";
import { browserHistory }     from "react-router";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.state = {
    //   course: { title: "" }
    // };
    //
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave() {
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push("/course");
  }

  render() {
    const { courses } = this.props;
    return (
      <div style={{marginTop: "20px"}}>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// connect() takes mapStateToProps and mapDispatchToProps as parameters and returns new function...
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
