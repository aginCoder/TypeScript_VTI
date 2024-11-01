import { combineReducers } from "redux";
import { formReducer } from "./FormReducer";

let RootReducers = combineReducers({
  //
  formReducer: formReducer,
});
export default RootReducers;