import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      hasLoginSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (this.state.username === "Marko" && this.state.password === "react") {
      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({ hasLoginFailed: true, hasLoginSuccess: false });
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid data!</div>
          )}
          {/* {this.state.hasLoginSuccess && <div>Success logging!</div>} */}
          User Name: {""}
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            value={this.state.username}
            onChange={this.handleChange}
          />{" "}
          {""} Password: {""}
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-space btn-md btn-success"
            onClick={this.loginClicked}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
