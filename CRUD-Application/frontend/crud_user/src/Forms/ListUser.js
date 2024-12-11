// src/components/ListUser.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../pages/root/Header";
import Menu from "../pages/root/Menu";
import Footer from "../pages/root/Footer";
import { fetchUsers, deleteUser } from "../pages/API/api"; 

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUserList();
  }, [page, searchTerm]);

  const fetchUserList = async () => {
    try {
      const data = await fetchUsers(page, searchTerm);
      setUsers(data.content || []);
      setTotalPages(data.totalPages || 0);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      fetchUserList();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <main className="container py-5">
        <div className="card shadow-lg border-0">
          <div className="card-header bg-danger text-white text-center">
            <h2 className="mb-0">User List</h2>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo tên..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center">Không tìm thấy người dùng nào.</td>
                  </tr>
                )}
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{page * 3 + index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}</td>
                    <td>
                      <Link className="btn btn-info btn-sm mx-1" to={`/viewuser/${user.id}`}>View</Link>
                      <Link className="btn btn-outline-success btn-sm mx-1" to={`/edituser/${user.id}`}>Edit</Link>
                      <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <nav aria-label="Page navigation example">
            <div className="d-flex justify-content-center">
              <ul className="pagination">
                <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(page - 1)}>&laquo;</button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={`page-item ${i === page ? "active" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>{i + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${page === totalPages - 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(page + 1)}>&raquo;</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <Link className="btn btn-success mx-1" to={"/adduser"}>Thêm người dùng</Link>
          <Link className="btn btn-primary mx-1" to={"/"}>Back to Home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListUser;
