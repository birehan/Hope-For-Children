import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import * as api from "../api/projects";
import { ProjectResponse } from "../types/project/project";

function* getProjects(): any {
  try {
    console.log("saga here");
    console.log("saga here");
    console.log("saga here");
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

// import { call, put, takeEvery } from "redux-saga/effects";
// import * as types from "../constants/actionTypes";
// import * as api from "../api/projects";
// import { ProjectResponse } from "../types/project/project";

// function* getProjects(): Generator<any, void, ProjectResponse> {
//   try {
//     console.log("saga here");
//     console.log("saga here");
//     console.log("saga here");

//     const projects: ProjectResponse = yield call(api.getProjects);
//     yield put({ type: types.GET_PROJECTS_SUCCESS, payload: projects.value });
//   } catch (error) {
//     yield put({
//       type: types.GET_PROJECTS_FAILED,
//       payload: error,
//     });
//   }
// }

// function* projectSaga(): Generator {
//   yield takeEvery(types.GET_PROJECTS, getProjects);
// }

// export default projectSaga;
