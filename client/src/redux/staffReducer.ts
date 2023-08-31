import * as types from "../constants/actionTypes";

const initialState = {
  staffs: [],
  loading: false,
  success: false,
  failed: false,
  message: "",
};

const staffReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case types.GET_STAFFS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_STAFFS_SUCCESS:
      return {
        ...state,
        staffs: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_STAFFS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
        staffs: [],
      };

    case types.CLEAN_UP:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
        staffs: [],
      };

    default:
      return state;
  }
};

export default staffReducer;
