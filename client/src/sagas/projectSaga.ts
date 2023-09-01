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

function* getProjectDetail(payload: any): any {
  try {
    const project = yield call(api.getProjectDetail, payload.payload);
    yield put({ type: types.GET_PROJECT_DETAIL_SUCCESS, payload: project });
  } catch (error) {
    yield put({
      type: types.GET_PROJECT_DETAIL_FAILED,
      payload: error,
    });
  }
}

function* getGalleries(): any {
  try {
    const projects = yield call(api.getGalleries);
    yield put({ type: types.GET_GALLERY_SUCCESS, payload: projects });
  } catch (error) {
    yield put({
      type: types.GET_GALLERY_FAILED,
      payload: error,
    });
  }
}

function* getGalleryDetail(payload: any): any {
  try {
    const project = yield call(api.getGalleryDetail, payload.payload);
    yield put({ type: types.GET_GALLERY_DETAIL_SUCCESS, payload: project });
  } catch (error) {
    yield put({
      type: types.GET_GALLERY_DETAIL_FAILED,
      payload: error,
    });
  }
}

function* getAlumniStudents(): any {
  try {
    const alumnis = yield call(api.getAlumniStudents);
    yield put({ type: types.GET_ALUMNI_STUDENTS_SUCCESS, payload: alumnis });
  } catch (error) {
    yield put({
      type: types.GET_ALUMNI_STUDENTS_FAILED,
      payload: error,
    });
  }
}

function* getStaffs(payload: any): any {
  try {
    const staffs = yield call(api.getStaffs, payload.payload);
    yield put({ type: types.GET_STAFFS_SUCCESS, payload: staffs });
  } catch (error) {
    yield put({
      type: types.GET_STAFFS_FAILED,
      payload: error,
    });
  }
}

function* projectSaga() {
  yield takeEvery(types.GET_PROJECTS, getProjects);
  yield takeEvery(types.GET_PROJECT_DETAIL, getProjectDetail);
  yield takeEvery(types.GET_GALLERY, getGalleries);
  yield takeEvery(types.GET_GALLERY_DETAIL, getGalleryDetail);
  yield takeEvery(types.GET_STAFFS, getStaffs);
  yield takeEvery(types.GET_ALUMNI_STUDENTS, getAlumniStudents);
}

export default projectSaga;
