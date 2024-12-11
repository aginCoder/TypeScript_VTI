// src/pages/AddUser.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../pages/root/Header"; 
import Menu from "../pages/root/Menu"; 
import Footer from "../pages/root/Footer";
import { addUser } from "../pages/API/api"; 

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState("");
  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");  

    if (!name || !username || !email) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await addUser(user);  
      navigate("/listuser");
    } catch (err) {
      setError("There was an error creating the user. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 border rounded p-5 shadow-lg bg-light">
          <h2 className="text-center mb-4 text-primary">Add User</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="Name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
                required
                minLength="3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Username" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={onInputChange}
                required
                minLength="3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Email" className="form-label fw-semibold">
                E-mail
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg mx-2 px-4">
                Submit
              </button>
              <Link className="btn btn-danger btn-lg mx-2 px-4" to="/listuser">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
