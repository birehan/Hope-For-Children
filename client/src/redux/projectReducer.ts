import * as types from "../constants/actionTypes";

const initialState = {
  projects: [],
  project: null,
  loading: false,
  success: false,
  failed: false,
  message: "",
};

const projectReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_PROJECTS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
        projects: [],
      };

    case types.GET_PROJECT_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PROJECT_DETAIL_SUCCESS:
      return {
        ...state,
        project: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_PROJECT_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
        project: null,
      };

    case types.CLEAN_UP_PROJECTS:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
        projects: [],
      };

    case types.CLEAN_UP_PROJECT_DETAIL:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
        project: null,
      };

    default:
      return state;
  }
};

export default projectReducer;
