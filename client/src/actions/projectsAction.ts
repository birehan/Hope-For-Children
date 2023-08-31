import * as constants from "../constants/actionTypes";

export const getProjects = () => {
  return { type: constants.GET_PROJECTS };
};
export const getProjectDetail = (payload: string | undefined) => {
  return { type: constants.GET_PROJECT_DETAIL, payload: payload };
};

export const getAlumniStudents = () => {
  return { type: constants.GET_ALUMNI_STUDENTS };
};

export const getStaffs = (payload: string | undefined) => {
  return { type: constants.GET_STAFFS, payload: payload };
};

export const cleanUp = () => {
  return { type: constants.CLEAN_UP };
};

export const cleanUpProjects = () => {
  return { type: constants.CLEAN_UP_PROJECTS };
};

export const cleanUpProjectDetail = () => {
  return { type: constants.CLEAN_UP_PROJECT_DETAIL };
};
