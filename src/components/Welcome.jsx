import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        Welcome to {this.props.match.params.name} Todo App. You can manage your
        todos <Link to="/todos"> here</Link>.
      </div>
    );
  }
}

export default Welcome;
