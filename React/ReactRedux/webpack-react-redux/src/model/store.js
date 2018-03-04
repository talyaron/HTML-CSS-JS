import {createStore} from "redux";
import rootReducer from "../model/reducers";
const store = createStore(rootReducer);
export default store;