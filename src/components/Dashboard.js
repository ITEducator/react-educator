import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses } from "../actions/courseActions";
import PropTypes from "prop-types";
import CourseItem from "./Course/CourseItem";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.props.getCourses();
    this.setState({
      loading: true,
    });
  }

  render() {
    if (this.state.loading) {
      const { courses } = this.props.courseReducer;
      return (
        <div>
          <h2>List of courses</h2>
          <div className="row m-5">
            {courses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

Dashboard.propTypes = {
  courseReducer: PropTypes.object.isRequired,
  getCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courseReducer: state.courseReducer,
});

export default connect(mapStateToProps, { getCourses })(Dashboard);
