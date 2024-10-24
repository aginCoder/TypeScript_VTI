import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            VTI ACADEMY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AccountManagement">
                  Account Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DepartmentManagement">
                  Department Management
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/SignUp">
                  <i className="bi bi-person-plus"></i> Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
