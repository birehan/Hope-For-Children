import * as types from "../constants/actionTypes";
import { Gallery } from "../types/types";

const initialState: {
  galleries: Gallery[];
  gallery: Gallery | null;
  loading: boolean;
  success: boolean;
  failed: boolean;
  message: string;
} = {
  galleries: [], // Use an empty array as the initial value
  gallery: null,
  loading: false,
  success: false,
  failed: false,
  message: "",
};
// const galleryReducer = (
//   state = initialState,
//   action: { type: any; payload: any }
// ) => {

const galleryReducer = (
  state = initialState,
  action: any
): typeof initialState => {
  switch (action.type) {
    case types.GET_GALLERY:
      return {
        ...state,
        loading: true,
      };
    case types.GET_GALLERY_SUCCESS:
      return {
        ...state,
        galleries: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_GALLERY_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
        galleries: [],
      };

    case types.GET_GALLERY_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case types.GET_GALLERY_DETAIL_SUCCESS:
      return {
        ...state,
        gallery: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_GALLERY_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
        gallery: null,
      };

    case types.CLEAN_UP_GALLERY:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
        galleries: [],
      };

    case types.CLEAN_UP_GALLERY_DETAIL:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
        gallery: null,
      };

    default:
      return state;
  }
};

export default galleryReducer;
