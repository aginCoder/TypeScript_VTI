import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import Axios from "axios";
import { addAccountNewAPI, getListAccountAPI } from "../API/AccountApi";
import { getListDepartmentAPI } from "../API/DepartmentApi";
import { getListPositionAPI } from "../API/PositionApi";

function AccountContainer(props) {

  let [showForm, setShowform] = useState(false);

  let [listAccount, setListAccount] = useState([]);

  let [listDepartment, setListDepartment] = useState([]);

  let [listPosition, setListPosition] = useState([]);

  let onHandleCreateButton = () => {
    setShowform(true);
  };

  let onHandleCloseModal = () => {
    //
    setShowform(false);
  };
  let onHandleCreateNewAccount = (account_New) => {

    addAccountNewAPI(account_New).then((res) => {
      // ...
      fetchListAccount();
    });

    setShowform(false);
  };

  let fetchListAccount = () => {
    Axios.get(`http://localhost:8080/api/v1/accounts`).then((res) => {
      // console.log("res: ", res);
      console.log("ListAccount_DB: ", res.data);
      let listAccount_API = res.data;
      setListAccount(listAccount_API);
    });
    getListAccountAPI().then((res) => {
      setListAccount(res);
    });
  };

  let fetchListDepartment = () => {
    Axios.get(`http://localhost:8080/api/v1/departments`).then((res) => {
      // console.log("res: ", res);
      console.log("ListDepartment_DB: ", res.data);
      let listDepartment_API = res.data;
      setListDepartment(listDepartment_API);
    });
    getListDepartmentAPI().then((res) => {
      setListDepartment(res);
    });
  };

  let fetchListPosition = () => {
    Axios.get(`http://localhost:8080/api/v1/possitions`).then((res) => {
      // console.log("res: ", res);
      console.log("possitions_DB: ", res.data);
      let listPossitions_API = res.data;
      setListPosition(listPossitions_API);
    });
    getListPositionAPI().then((res) => {
      setListPosition(res);
    });
  };
  useEffect(() => {
    fetchListAccount();
    fetchListDepartment();
    fetchListPosition();
  }, []);
  //
  return (
    <div>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
      <ResultForm listAccount={listAccount} />
    </div>
  );
}

export default AccountContainer;