import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import { createCourse } from "../../actions/courseActions";

class AddCourse extends Component {
  constructor() {
    super();

    const defaultCategory = "be";

    this.state = {
      id: "",
      title: "",
      subtitle: "",
      price: "",
      requirements: [],
      description: "",
      category: defaultCategory,
      image: {},
    };

    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDrop(picture) {
    this.setState({
      image: picture[0],
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeRequirements(e) {
    const value = e.target.value.split(",").map((item) => item.trim());
    this.setState({ requirements: value });
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

    const newCourse = new FormData();
    newCourse.append("course", JSON.stringify(courseData));
    if (this.state.image !== null && this.state.image.name !== undefined)
      newCourse.append("image", this.state.image, this.state.image.name);
    else newCourse.append("image", new Blob());

    this.props.createCourse(newCourse, this.props.history);
  }

  render() {
    return (
      <div className="justify-content-center">
        <div className="w-50 mx-auto">
          Creating Course
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
              imgExtension={[".jpg", ".gif", ".png"]}
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

AddCourse.propTypes = {
  createCourse: PropTypes.func.isRequired,
};

export default connect(null, { createCourse })(AddCourse);
