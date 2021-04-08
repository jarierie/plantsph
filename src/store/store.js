import { createStore } from "redux";
import rootReducer from "../reducers/itemsReducer";

const store = createStore(rootReducer);

export default store;
