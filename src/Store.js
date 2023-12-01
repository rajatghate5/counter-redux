import { createStore } from "redux";
import incDecReducers from "./reducers/incDecReducers";
const store = createStore(incDecReducers);

export default store;
