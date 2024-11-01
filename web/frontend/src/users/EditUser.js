import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`, {
      headers: {
        'Authorization': `Bearer 0ce896c75ef6472e808da2a50fcefaf5` 
      }
    });
    setUser(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user, {
      headers: {
        'Authorization': `Bearer 0ce896c75ef6472e808da2a50fcefaf5` // Thêm khóa API
      }
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

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
