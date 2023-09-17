import { all } from "redux-saga/effects";
import { watchUserLogin } from "./authSaga";
import { userSaga } from "./userSaga";
import { projectSaga } from "./projectSaga";
import { staffSaga } from "./staffSaga";
import { alumniSaga } from "./alumniSaga";

export default function* rootSaga() {
  yield all([watchUserLogin(), userSaga(), projectSaga(), staffSaga(), alumniSaga()]);
}
