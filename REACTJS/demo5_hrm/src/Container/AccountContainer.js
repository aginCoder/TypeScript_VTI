import React from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  return (
    <div>
      <CreateButton />
      <ModalCreateNewAccount />
      <ResultForm />
    </div>
  );
}

export default AccountContainer;