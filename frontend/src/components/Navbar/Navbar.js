import React, { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import let_travel from "./let_travel.jpeg";
import swal from "sweetalert";
import { createHashHistory } from "history";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    if (localStorage.getItem("authToken")) {
      localStorage.clear();
      window.location.href = "/home";
      swal("Logged Out!", "Successfully Logged Out", "success");
    } else {
      swal("Not Logged In!", "Please Login first", "warning");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            <img src={let_travel} alt="Let's Travel" className="navbar-logo" />
            Let's Travel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  Tour Reservation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/view" className="nav-link">
                  Tour Packages
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning nav-link"
                  onClick={() => this.logout()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
