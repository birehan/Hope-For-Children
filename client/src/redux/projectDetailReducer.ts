import * as types from "../constants/actionTypes";

const initialState = {
  project: null,
  loading: false,
  success: false,
  failed: false,
  message: "",
};

const projectDetailReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
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

export default projectDetailReducer;
