import React, { Component } from "react";
import PropTypes from "prop-types";
import { createCourse } from "../../actions/courseActions";
import { connect } from "react-redux";

class AddCourse extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      text: "",
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
      text: this.state.text,
    };

    this.props.createCourse(newCourse, this.props.history);
  }

  render() {
    return (
      <div>
        Creating Course
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="btn btn-primary btn-block mt-4"
          ></input>
        </form>
      </div>
    );
  }
}

AddCourse.propTypes = {
  createCourse: PropTypes.func.isRequired,
};

export default connect(null, { createCourse })(AddCourse);
