import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { createUserApi } from "../../api/user";
import {
  CreateUserErrorAction,
  CreateUserSuccessAction,
} from "../redux/user/userSlice";
import { User } from "../../types/user";

function* createUser({
  payload: user,
}: PayloadAction<User>): Generator<any, void, User> {
  try {
    const data = yield call(createUserApi, user);
    yield put(CreateUserSuccessAction(data));
  } catch (error) {
    yield put(CreateUserErrorAction("Something went wrong"));
  }
}

export function* userSaga() {
  yield takeLatest("user/CreateUserAction", createUser);
}
