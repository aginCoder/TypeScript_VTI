import React, { useState } from "react";
import { Link } from "react-router-dom";

function AccountManagement(props) {
  // Call API
  let listAccount_API_FAKE = [
    { id: 1, email: "anpg1@gmail.com" },
    { id: 2, email: "anpg2@gmail.com" },
    { id: 3, email: "anpg3@gmail.com" },
    { id: 4, email: "anpg4@gmail.com" },
    { id: 5, email: "anpg5@gmail.com" },
  ];
  // Khai báo State để lưu dữ liệu

  let [listAccount, setListAccount] = useState(listAccount_API_FAKE);
  // Sử dụng hàm map()
  let items = listAccount.map((acc) => {
    return (
      <tr>
        <td>{acc.id}</td>
        <td>
          <Link to={"/AccountDetail/" + acc.id}>{acc.email}</Link>
        </td>
      </tr>
    );
  });
  //
  return (
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountManagement;