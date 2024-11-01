// Bước 4 Khai báo Action SHOW_INPUT_FORM

import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/formActionType";

let actionShowInputForm = () => {
  return {
    type: SHOW_INPUT_FORM,
  };
};

// Action ẩn Input Form
let actionCloseInputForm = () => {
  return {
    type: CLOSE_INPUT_FORM,
  };
};

export { actionShowInputForm, actionCloseInputForm };