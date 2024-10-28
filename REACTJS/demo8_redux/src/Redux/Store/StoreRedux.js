import { createStore } from "redux";
import { RootReducer } from "../Reducers/rootReducer";

let storeRedux = createStore(RootReducer);

export { storeRedux };