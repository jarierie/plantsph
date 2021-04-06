import { createStore } from "redux";
import itemStateReducer from "../reducers/itemsReducer";

const store = createStore(itemStateReducer);

export default store;
