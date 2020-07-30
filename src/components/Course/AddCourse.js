import React, { Component } from "react";
import PropTypes from "prop-types";
import { createCourse } from "../../actions/courseActions";
import { connect } from "react-redux";

class AddCourse extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      subtitle: "",
      price: "",
      requirements: "",
      description: "",
      category: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newCourse = {
      id: this.state.id,
      title: this.state.title,
      subtitle: this.state.subtitle,
      price: this.state.price,
      requirements: this.state.requirements,
      description: this.state.description,
      category: this.state.category,
    };

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
              onChange={this.onChange}
            />
            <input
              type="text"
              className="form-control mt-2"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onChange}
            />
            <select name="category" className="custom-select mt-2">
              <option defaultValue>Category</option>
              <option value="be">Back-End</option>
              <option value="fe">Front-End</option>
              <option value="ai">AI</option>
            </select>
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
