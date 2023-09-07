import * as constants from "../constants/actionTypes";

export const getProjects = () => {
  return { type: constants.GET_PROJECTS };
};
export const getProjectDetail = (payload: string | undefined) => {
  return { type: constants.GET_PROJECT_DETAIL, payload: payload };
};

export const getGalleries = () => {
  return { type: constants.GET_GALLERY };
};
export const getGalleryDetail = (payload: string | undefined) => {
  return { type: constants.GET_GALLERY_DETAIL, payload: payload };
};

export const getAlumniStudents = () => {
  return { type: constants.GET_ALUMNI_STUDENTS };
};

export const getStaffs = (payload: string | undefined) => {
  return { type: constants.GET_STAFFS, payload: payload };
};

export const cleanUpProjects = () => {
  return { type: constants.CLEAN_UP_PROJECTS };
};

export const cleanUpProjectDetail = () => {
  return { type: constants.CLEAN_UP_PROJECT_DETAIL };
};

export const cleanUpGalleries = () => {
  return { type: constants.CLEAN_UP_GALLERY };
};

export const cleanUpGalleryDetail = () => {
  return { type: constants.CLEAN_UP_GALLERY_DETAIL };
};

export const cleanUpAlumni = () => {
  return { type: constants.CLEAN_UP_ALUMNI };
};

export const cleanUpStaff = () => {
  return { type: constants.CLEAN_UP_STAFF };
};
