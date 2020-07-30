import courseReducer from "./courseReducer";
import errorReducer from "./errorReducer";
import { combineReducers } from "redux";

export default combineReducers({
  courseReducer,
  errorReducer,
});
