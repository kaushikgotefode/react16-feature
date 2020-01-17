import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">
          React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <Link className="nav-link" to="/burger-builder">
                Burger Builder <span className="sr-only">(current)</span>
              </Link> */}
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Feature <span className="sr-only">(current)</span>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <Link className="dropdown-item" to="/form-basics">
                  Form Basics
                </Link> */}
                <Link className="dropdown-item" to="/react-hooks">
                  React Hooks
                </Link>
                {/* <Link className="dropdown-item" to="#">
                  Something else here
                </Link> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
