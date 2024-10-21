import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  let { listAccount } = props;
  console.log("listAccount_ResultFormItem: ", listAccount);

  let items = listAccount.map((account, index) => {
    return (
      <tr>
        <td>{account.id}</td>
        <td>{account.email}</td>
        <td>{account.username}</td>
        <td>{account.fullname}</td>
        <td>{account.department}</td>
        <td>{account.postion}</td>
        <td>{account.createDate}</td>
        <td>
          <Button color="warning">Edit</Button>
        </td>
        <td>
          <Button color="warning">Delete</Button>
        </td>
      </tr>
    );
  });
  //
  return items;
}

export default ResultFormItem;