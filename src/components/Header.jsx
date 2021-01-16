import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark mt-3 ml-4 mr-4 bg-dark ">
            <div>
              <Link className="navbar-brand" to="/">
                TodoApp
              </Link>
            </div>
            <ul className="navbar-nav">
              <li className="nav-link">
                <Link className="nav-link" to="/welcome/Marko">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-link" to="/todos">
                  {" "}
                  Todos
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              <li className="nav-link">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
