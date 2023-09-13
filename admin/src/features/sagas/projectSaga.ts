import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { CreateProject, Project } from "../../types/types";
import {
  CreateProjectFailure,
  CreateProjectSuccess,
  FetchAllProjectsFailure,
  FetchAllProjectsSuccess,
} from "../redux/project/projectSlice";
import Projects from "../../api/projects";

function* fetchAllProjects({}: PayloadAction<Project[]>): Generator<
  any,
  void,
  Project[]
> {
  try {
    const data = yield call(Projects.list);
    yield put(FetchAllProjectsSuccess(data));
  } catch (error) {
    yield put(FetchAllProjectsFailure("Something went wrong"));
  }
}

function* createProject({
  payload: project,
}: PayloadAction<CreateProject>): Generator<any, void, Project> {
  try {
    const data = yield call(Projects.create, project);
    yield put(CreateProjectSuccess(data));
  } catch (error) {
    yield put(CreateProjectFailure("Something went wrong"));
  }
}

export function* projectSaga() {
  yield takeLatest("projects/FetchAllProjects", fetchAllProjects);
  yield takeLatest("projects/CreateProjectAction", createProject);
}
