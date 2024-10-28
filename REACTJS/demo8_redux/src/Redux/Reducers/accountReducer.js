import { ADD_ACCOUNT } from "../Contants/accountActionType";

// Bước 3: Khai báo các State cần quản lý
let intinalState = {
  listAccounts: [],
  //   ...
};

// Bước 2: Khai báo ra Reducer
let accountReducer = (state = intinalState, action) => {
  // Logic
  switch (action.type) {
    case ADD_ACCOUNT:
      // Lấy được Account cần thêm:
      let account_new = action.account;
      let listAccount_New = state.listAccounts;
      listAccount_New.push(account_new);
      return {
        ...state,
        listAccounts: listAccount_New,
      };
    // case value:
    default:
      return { ...state };
  }
};

export { accountReducer };