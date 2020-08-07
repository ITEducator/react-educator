import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCourse, deleteCourse } from "../../actions/courseActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleCourse extends Component {
  constructor() {
    super();

    this.state = {
      course: {
        id: "",
        title: "",
        subtitle: "",
        price: "",
        requirements: [],
        description: "",
        category: "",
        image: {},
      },
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: true,
      course: nextProps.course,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCourse(id, this.props.history);
  }

  onDeleteClick = (id) => {
    this.props.deleteCourse(id, this.props.history);
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="card w-25 mx-auto">
          <div className="card-body">
            {this.state.course.image !== null ? (
              <img
                className="w-50"
                src={`data:image/png;base64,${this.state.course.image.image.data}`}
                alt="course_image"
              />
            ) : (
              ""
            )}
            <h5 className="card-title">{this.state.course.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.state.course.subtitle}
            </h6>
            <p className="card-text">
              Description: {this.state.course.description}
            </p>

            <p className="card-text">
              Requirements: {this.state.course.requirements.join(", ")}
            </p>

            <p className="card-text">Price: {this.state.course.price}$</p>

            <Link
              to={`/updateCourse/${this.state.course.id}`}
              className="btn btn-success mr-2"
            >
              Update
            </Link>
            <li
              className="btn btn-dark"
              onClick={this.onDeleteClick.bind(this, this.state.course.id)}
            >
              Delete
            </li>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

SingleCourse.propTypes = {
  getCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.courseReducer.course,
});

export default connect(mapStateToProps, { getCourse, deleteCourse })(
  SingleCourse
);
