import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contant/FormActionType";

// Bước 3: Khai báo các State cần quản lý
let intinalState = {
  showForm: false,
};

// Bước 2: Khai báo ra Reducer
let formReducer = (state = intinalState, action) => {
  switch (action.type) {
    case SHOW_INPUT_FORM:
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_INPUT_FORM:
      return {
        ...state,
        showForm: false,
      };
    default:
      return { ...state };
  }
};

export { formReducer };