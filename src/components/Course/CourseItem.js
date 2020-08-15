import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseItem extends Component {
  render() {
    const { course } = this.props;
    return (
      <div className="col-sm-2">
        {course.image.image !== undefined && (
          <img
            className="w-50"
            src={`data:image/png;base64,${course.image.image.data}`}
            alt="course_image"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{course.title} </h5>
          <p className="card-text">{course.description}</p>
          <Link to={`/course/${course.id}`} className="btn btn-info mr-2">
            View course
          </Link>
        </div>
      </div>
    );
  }
}

export default CourseItem;
