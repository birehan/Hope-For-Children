import * as types from "../constants/actionTypes";

const initialState = {
  alumnis: [],
  loading: false,
  success: false,
  failed: false,
  message: "",
};

const alumniReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    // get courses
    case types.GET_ALUMNI_STUDENTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALUMNI_STUDENTS_SUCCESS:
      return {
        ...state,
        alumnis: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_ALUMNI_STUDENTS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
        alumnis: [],
      };

    default:
      return state;
  }
};

export default alumniReducer;
