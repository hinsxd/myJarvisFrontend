import { combineReducers } from "redux";
import userInfo from "./user/userInfo";
import authMessageBox from "./auth/authMessageBox";
import isLoggedIn from "./auth/isLoggedIn";

const rootReducer = combineReducers({
  userInfo,
  authMessageBox,
  isLoggedIn,
});

export default rootReducer;
