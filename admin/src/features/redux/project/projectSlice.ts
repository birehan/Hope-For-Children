import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateProject, Project } from "../../../types/types";

export interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  isLoading: false,
  error: null,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    FetchAllProjects: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    FetchAllProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.isLoading = false;
      state.projects = action.payload;
    },
    FetchAllProjectsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    CreateProjectAction: (
      state,
      { payload: project }: PayloadAction<FormData>
    ) => {
      state.isLoading = true;
    },

    CreateProjectSuccess: (state, action: PayloadAction<Project>) => {
      state.isLoading = false;
      state.projects = [...state.projects, action.payload];
    },
    CreateProjectFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    UpdateProjectAction: (
      state,
      { payload: project }: PayloadAction<FormData>
    ) => {
      state.isLoading = true;
    },

    UpdateProjectSuccess: (state, action: PayloadAction<Project>) => {
      state.isLoading = false;
      state.projects = state.projects.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    },
    UpdateProjectFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  FetchAllProjects,
  FetchAllProjectsSuccess,
  FetchAllProjectsFailure,
  CreateProjectAction,
  CreateProjectSuccess,
  CreateProjectFailure,

  UpdateProjectAction,
  UpdateProjectSuccess,
  UpdateProjectFailure,
} = projectSlice.actions;
