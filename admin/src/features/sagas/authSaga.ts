import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoginErrorAction, LoginSuccessAction } from "../redux/auth/authSlice";
import { userLoginApi } from "../../api/auth";
import { AuthType } from "../../types/user";

function* userLogin({
  payload: user,
}: PayloadAction<AuthType>): Generator<any, void, AuthType> {
  try {
    const data = yield call(userLoginApi, user);
    yield put(LoginSuccessAction(data));
  } catch (error) {
    yield put(LoginErrorAction("Something went wrong"));
  }
}

export function* watchUserLogin() {
  yield takeLatest("auth/LoginAction", userLogin);
}
