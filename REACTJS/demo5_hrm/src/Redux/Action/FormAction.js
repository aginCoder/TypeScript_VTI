import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contant/FormActionType";

let actionShowInputForm = () => {
  return {
    type: SHOW_INPUT_FORM,
  };
};

// Action ẩn input form
let actionCloseInputForm = () => {
  return {
    type: CLOSE_INPUT_FORM,
  };
};

export { actionShowInputForm, actionCloseInputForm };