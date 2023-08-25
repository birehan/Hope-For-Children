import * as types from "../constants/actionTypes";

const initialState = {
  projects: null,
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
    // get courses
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
        courses: null,
      };

    // case types.CLEAN_UP:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: false,
    //     message: "",
    //   };

    default:
      return state;
  }
};

export default projectReducer;
