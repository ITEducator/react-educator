import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import { createCourse } from "../../actions/courseActions";
import classnames from "classnames";

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
      errors: {},
    };

    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    newCourse.append(
      "course",
      new Blob([JSON.stringify(courseData)], {
        type: "application/json",
      })
    );
    const image = this.state.image;
    if (image !== null && image.name !== undefined) {
      newCourse.append("image", image, image.name);
    } else {
      newCourse.append("image", new Blob());
    }

    this.props.createCourse(newCourse, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="justify-content-center">
        <div className="w-50 mx-auto">
          Creating Course
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className={classnames("form-control mt-5", {
                "is-invalid": errors.title,
              })}
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.onChange}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
            <input
              type="text"
              className={classnames("form-control mt-2", {
                "is-invalid": errors.subtitle,
              })}
              name="subtitle"
              placeholder="Subtitle"
              value={this.state.subtitle}
              onChange={this.onChange}
            />
            {errors.subtitle && (
              <div className="invalid-feedback">{errors.subtitle}</div>
            )}
            <input
              type="text"
              className={classnames("form-control mt-2", {
                "is-invalid": errors.price,
              })}
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.onChange}
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
            <input
              type="text"
              className={classnames("form-control mt-2", {
                "is-invalid": errors.requirements,
              })}
              name="requirements"
              placeholder="Requirements"
              value={this.state.requirements}
              onChange={this.onChangeRequirements.bind(this)}
            />
            {errors.requirements && (
              <div className="invalid-feedback">{errors.requirements}</div>
            )}
            <input
              type="text"
              className={classnames("form-control mt-2", {
                "is-invalid": errors.description,
              })}
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onChange}
            />
            {errors.description && (
              <div className="invalid-feedback">{errors.description}</div>
            )}
            <select
              name="category"
              className={classnames("custom-select mt-2", {
                "is-invalid": errors.category,
              })}
              value={this.state.category}
              onChange={this.onChange}
            >
              <option value="be">Back-End</option>
              <option value="fe">Front-End</option>
              <option value="ai">AI</option>
            </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category}</div>
            )}
            <ImageUploader
              name="image"
              withIcon={true}
              buttonText="Choose image"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png"]}
              maxFileSize={5242880}
            />
            {errors.imageNotFound && (
              <div className="text-danger">{errors.imageNotFound}</div>
            )}
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errorReducer,
});

export default connect(mapStateToProps, { createCourse })(AddCourse);
