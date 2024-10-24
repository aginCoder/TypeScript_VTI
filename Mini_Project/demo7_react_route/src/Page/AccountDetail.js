import React from "react";
import { useParams } from "react-router-dom";

function AccountDetail(props) {
  let param = useParams();
  let account_show_id = param.id_param;

  console.log("account_show_id: ", account_show_id);

  //
  return (
    <div>
      <h2>AccountDetail</h2>
    </div>
  );
}

export default AccountDetail;