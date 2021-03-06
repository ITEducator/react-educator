import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageUploader from "react-images-upload";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      biography: "",
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

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      biography: this.state.biography,
    };

    const user = new FormData();
    user.append("user", JSON.stringify(userData));
    const image = this.state.image;
    if (image !== null && image.name !== undefined) {
      user.append("image", image, image.name);
    } else {
      user.append("image", new Blob());
    }

    this.props.createUser(user);
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="w-50 mx-auto text-center">
        <form onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            name="username"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            value={this.state.username}
            onChange={this.onChange}
          ></input>
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            name="password"
            className="form-control mt-2"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={this.onChange}
          ></input>
          <label htmlFor="inputFirstName" className="sr-only">
            First name
          </label>
          <input
            type="text"
            id="inputFirstName"
            name="firstName"
            className="form-control mt-2"
            placeholder="First name"
            required
            value={this.state.firstName}
            onChange={this.onChange}
          ></input>
          <label htmlFor="inputLastName" className="sr-only">
            Last name
          </label>
          <input
            type="text"
            id="inputLastName"
            name="lastName"
            className="form-control mt-2"
            placeholder="Last name"
            required
            value={this.state.lastName}
            onChange={this.onChange}
          ></input>
          <label htmlFor="inputBiography" className="sr-only">
            Biography
          </label>
          <input
            type="text"
            id="inputBiography"
            name="biography"
            className="form-control mt-2"
            placeholder="Biography"
            required
            value={this.state.biography}
            onChange={this.onChange}
          ></input>
          <ImageUploader
            name="image"
            withIcon={true}
            buttonText="Choose image"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png"]}
            maxFileSize={5242880}
          />
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
          >
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { createUser })(Registration);
