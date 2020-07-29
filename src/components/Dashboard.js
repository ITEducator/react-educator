import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses } from "../actions/courseActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    const { courses } = this.props.courseReducer;
    return (
      <div>Look Over Here, {courses.map((course) => course.text + "/ ")}</div>
    );
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
