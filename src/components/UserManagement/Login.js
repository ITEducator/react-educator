import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="w-50 mx-auto text-center">
        <form className="form-signin">
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          ></img>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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

export default Login;
