import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../pages/root/Header"; 
import Menu from "../pages/root/Menu"; 
import Footer from "../pages/root/Footer";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

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
        <div className="col-md-8 col-lg-4 border rounded p-4 mt-4 shadow-lg bg-light">
          <h2 className="text-center mb-4 text-danger">User Details</h2>
          <div className="card border-0">
            <div className="card-header bg-danger text-white text-center fw-bold">
              <h5>Details ID: {user.id}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-bold">Name:</span>
                <span className="text-secondar text-center w-100">{user.name}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-bold">Username:</span>
                <span className="text-secondary text-center w-100">{user.username}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-bold">Email:</span>
                <span className="text-secondary text-center w-100">{user.email}</span>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link className="btn btn-secondary btn-lg px-4 me-2" to={"/listuser"}>
              Quay lại danh sách người dùng
            </Link>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );  
  
}