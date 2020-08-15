import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCourse,
  deleteCourse,
  createCourse,
} from "../../actions/courseActions";

class UpdateCourse extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      subtitle: "",
      price: "",
      requirements: [],
      description: "",
      category: "",
      image: {},
    };

    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCourse(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      title,
      subtitle,
      price,
      requirements,
      description,
      category,
      image,
    } = nextProps.course;

    this.setState({
      id,
      title,
      subtitle,
      price,
      requirements,
      description,
      category,
      image,
    });
  }

  onDrop(picture) {
    this.setState({
      image: picture[0],
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const courseData = {
      id: this.state.id,
      title: this.state.title,
      subtitle: this.state.subtitle,
      price: this.state.price,
      requirements: this.state.requirements,
      description: this.state.description,
      category: this.state.category,
    };

    const updateCourse = new FormData();
    updateCourse.append(
      "course",
      new Blob([JSON.stringify(courseData)], {
        type: "application/json",
      })
    );
    const image = this.state.image;
    if (image !== null && image.name !== undefined) {
      updateCourse.append("image", image, image.name);
    } else {
      updateCourse.append("image", new Blob());
    }

    this.props.createCourse(updateCourse, this.props.history);
  }

  onChangeRequirements(e) {
    const value = e.target.value.split(",").map((item) => item.trim());
    this.setState({ requirements: value });
  }

  render() {
    return (
      <div className="justify-content-center">
        <div className="w-50 mx-auto">
          Updating Course
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control mt-5"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              name="subtitle"
              placeholder="Subtitle"
              value={this.state.subtitle}
              onChange={this.onChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.onChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              name="requirements"
              placeholder="Requirements"
              value={this.state.requirements}
              onChange={this.onChangeRequirements.bind(this)}
            />
            <input
              type="text"
              className="form-control mt-2"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onChange}
            />
            <select
              name="category"
              className="custom-select mt-2"
              value={this.state.category}
              onChange={this.onChange}
            >
              <option value="be">Back-End</option>
              <option value="fe">Front-End</option>
              <option value="ai">AI</option>
            </select>
            <ImageUploader
              name="image"
              withIcon={true}
              buttonText="Choose image"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
            <input
              type="submit"
              className="btn btn-primary btn-block mt-3"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

UpdateCourse.propTypes = {
  getCourse: PropTypes.func.isRequired,
  createCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.courseReducer.course,
});

export default connect(mapStateToProps, {
  getCourse,
  deleteCourse,
  createCourse,
})(UpdateCourse);
