import { LOGIN, REGISTER_USER } from "../actions/auth";
import { GET_USER_INFO } from "../actions/user";
import { all, takeLatest } from "redux-saga/effects";

import { loginSaga, registerUserSaga } from "./auth";
import { getUserInfoSaga } from "./user";

export default function* sagaWatcher() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(REGISTER_USER, registerUserSaga),
    takeLatest(GET_USER_INFO, getUserInfoSaga),
  ]);
}
