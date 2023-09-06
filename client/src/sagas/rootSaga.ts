import { all } from "redux-saga/effects";
import projectSaga from "./agentSaga";

export default function* rootSaga() {
  yield all([projectSaga()]);
}
