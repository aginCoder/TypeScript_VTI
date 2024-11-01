import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    date: "",
  });

  const { name, username, email, date } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user, {
      headers: {
        'Authorization': `Bearer 0ce896c75ef6472e808da2a50fcefaf5` 
      }
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" name="name" value={name} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" placeholder="Enter your username" name="username" value={username} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input type="text" className="form-control" placeholder="Enter your e-mail address" name="email" value={email} onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" name="date" value={date} onChange={onInputChange} />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
