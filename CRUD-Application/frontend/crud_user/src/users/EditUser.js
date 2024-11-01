import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../pages/root/Header";
import Menu from "../pages/root/Menu";
import Footer from "../pages/root/Footer";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/listuser");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <Header />
      <Menu />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-4 border rounded p-4 mt-2 shadow bg-light">
            <h2 className="text-center mb-4 text-primary">Edit User</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-primary mx-2">
                  Submit
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/listuser">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}