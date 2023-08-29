import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import * as api from "../api/projects";

function* getProjects(): any {
  try {
    const projects = yield call(api.getProjects);
    yield put({ type: types.GET_PROJECTS_SUCCESS, payload: projects });
  } catch (error) {
    yield put({
      type: types.GET_PROJECTS_FAILED,
      payload: error,
    });
  }
}

function* projectSaga() {
  yield takeEvery(types.GET_PROJECTS, getProjects);
}

export default projectSaga;
