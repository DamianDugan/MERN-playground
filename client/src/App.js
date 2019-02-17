import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Inventory from "./components/inventory";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavLink
              class="link"
              exact
              to="/inventory"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Inventory
            </NavLink>
            <Route path="/inventory" component={Inventory} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
