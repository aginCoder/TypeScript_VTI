import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://api.example.com/login", formData);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
