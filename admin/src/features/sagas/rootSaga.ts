import { all } from "redux-saga/effects";
import { watchUserLogin } from "./authSaga";
import { userSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([watchUserLogin(), userSaga()]);
}
