import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  // Khai báo 1 state để quản lý việc ẩn hiện của Modal
  let [showForm, setShowform] = useState(false);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listAccount, setListAccount] = useState([]);

  // Khai báo hàm Callback
  let onHandleCreateButton = () => {
    //
    // console.log("Gọi hàm onHandleCreateButton");
    setShowform(true);
  };

  // Khai báo hàm Callback xử khi người dùng nhấn nút Close bên Modal
  let onHandleCloseModal = () => {
    //
    setShowform(false);
  };
  // Khai báo hàm Callback xử khi người dùng nhấn nút Create New Account bên Modal
  let onHandleCreateNewAccount = (account_New) => {
    // console.log("account_New_AccountContainer: ", account_New);
    listAccount.push(account_New);
    setListAccount(listAccount);

    // Lưu trữ dữ liệu vào LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));

    setShowform(false);
  };

  // Thực hiện khai báo useEffect, đoạn code trong useEffect này gọi khi component được mount
  useEffect(() => {
    // Load dữ liệu từ LocalStorage
    if (localStorage && localStorage.getItem("listAccount")) {
      let listAccount_LocalStorage = JSON.parse(
        localStorage.getItem("listAccount")
      );
      //
      setListAccount(listAccount_LocalStorage);
    }
  }, []);
  //
  return (
    <div>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      <ResultForm listAccount={listAccount} />
    </div>
  );
}

export default AccountContainer;