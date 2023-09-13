import { all } from "redux-saga/effects";
import { watchUserLogin } from "./authSaga";
import { userSaga } from "./userSaga";
import { projectSaga } from "./projectSaga";

export default function* rootSaga() {
  yield all([watchUserLogin(), userSaga(), projectSaga()]);
}
