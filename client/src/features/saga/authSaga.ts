import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put, call } from "redux-saga/effects";
import { fetchUserApi } from "../actions/authActions";
import { setAuthUser } from "../slices/authSlices";

function* login(action:PayloadAction<{ username: string, password: string }>): Generator<any, void, any> {
  try {
    const result = yield call(fetchUserApi, action.payload);
    yield put(setAuthUser(result));
  } catch (error) {
    // Handle error
  }
}

export function* authSaga() {
  yield takeLatest("auth/setAuthUser", login);
}
