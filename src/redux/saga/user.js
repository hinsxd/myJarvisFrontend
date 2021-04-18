import { put, call } from "redux-saga/effects";

import userService from "../../service/user";
import { storeUserInfo, loginOn, loginOff } from "../actions/auth";

export function* getUserInfoSaga() {
  try {
    const { data } = yield call(userService.getUserInfoByToken);
    yield put(storeUserInfo(data));
    yield put(loginOn());
  } catch (error) {
    yield put(loginOff());
  }
}
