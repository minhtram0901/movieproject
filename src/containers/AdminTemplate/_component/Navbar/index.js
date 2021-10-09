import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Booking Movie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/admin">
                Dashboard 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/admin/add-user">
                Add User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/admin/add-movie">
                Add Movie
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
