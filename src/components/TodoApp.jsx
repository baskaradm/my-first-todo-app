import React, { Component } from "react";
import Login from "../components/Login";
import Welcome from "../components/Welcome";
import Error from "./Error";
import Todos from "../components/Todos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Logout from "./Logout";
import Footer from "./Footer";

class TodoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/welcome/:name" component={Welcome} />
            <Route path="/todos" component={Todos} />
            <Route path="/logout" component={Logout} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
