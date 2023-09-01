import axios from "axios";
import { API_BASE_URL } from "../config";
axios.defaults.withCredentials = true;
const transport = axios.create({
  withCredentials: true,
});

export const getProjects = async () => {
  try {
    const { data } = await transport.get(API_BASE_URL + "/projects");
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getProjectDetail = async (payload: string) => {
  try {
    const { data } = await transport.get(`${API_BASE_URL}/projects/${payload}`);
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getGalleries = async () => {
  try {
    const { data } = await transport.get(API_BASE_URL + "/categories");
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getGalleryDetail = async (payload: string) => {
  try {
    const { data } = await transport.get(
      `${API_BASE_URL}/categories/${payload}`
    );
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getAlumniStudents = async () => {
  try {
    const { data } = await transport.get(API_BASE_URL + "/Alumnis");
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getStaffs = async (payload: string) => {
  try {
    const path = `${API_BASE_URL}/staffs/sector?sector=${payload}`;
    const { data } = await transport.get(
      `${API_BASE_URL}/staffs/sector?sector=${payload}`
    );
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};
