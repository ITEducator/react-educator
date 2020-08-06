import React, { Component } from "react";

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      firstName:"",
      lastName:"",
      biography:""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="w-50 mx-auto text-center">
        <form className="form-signup">
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
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
        </form>
      </div>
    );
  }
}

export default Registration;
