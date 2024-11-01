import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div>
      <div className="row">
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1E90FF" }}>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">VTI ACADEMY</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white active" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/AccountManagement"}>
                    Account Management
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/DepartmentManagement"}>
                    Department Management
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/SignUp"}>
                    <i className="fas fa-user"></i> Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/Login"}>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
