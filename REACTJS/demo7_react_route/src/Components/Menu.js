import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="row">
      <header className="bg-info text-dark shadow-sm">
          <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                  <Link className='nav-link' to="/home">
                    <a className="navbar-brand" href="#">VTI ACADEMY</a>
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
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/home">
                          <a className="nav-link" href="#">Home</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          <a className="nav-link" href="#">About</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/accountManagement">
                          <a className="nav-link" href="#">AccountManagement</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/departmentManagement">
                          <a className="nav-link" href="#">DepartmentManagement</a>
                        </Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        <i className="fas fa-user"></i> Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
      </header>
    </div>
  );
}

export default Menu;