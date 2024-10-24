import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>This is Home page</h2>

      {/* Nút Log Out */}
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Home;
