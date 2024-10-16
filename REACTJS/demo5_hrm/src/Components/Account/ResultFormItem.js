import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  return (
    <>
      <tr>
        <td>1</td>
        <td>anpg@gmail.com</td>
        <td>anpg</td>
        <td>Gia Ân</td>
        <td>Web</td>
        <td>Dev</td>
        <td>2024-02-22</td>
        <td>
          <Button color="warning">Edit</Button>
        </td>
        <td>
          <Button color="warning">Delete</Button>
        </td>
      </tr>
    </>
  );
}

export default ResultFormItem;