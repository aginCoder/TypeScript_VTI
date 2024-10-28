import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { accountReducer } from "./accountReducer";

let RootReducer = combineReducers({
  formReducer: formReducer,
  accountReducer: accountReducer,
});

export { RootReducer };