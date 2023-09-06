import axios from "axios";
axios.defaults.withCredentials = true;
const transport = axios.create({
  withCredentials: true,
});

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export const getProjects = async () => {
  try {
    const { data } = await transport.get(baseUrl + "/projects");
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getProjectDetail = async (payload: string) => {
  try {
    const { data } = await transport.get(`${baseUrl}/projects/${payload}`);
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getGalleries = async () => {
  try {
    const { data } = await transport.get(baseUrl + "/categories");
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getGalleryDetail = async (payload: string) => {
  try {
    const { data } = await transport.get(`${baseUrl}/categories/${payload}`);
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getAlumniStudents = async () => {
  try {
    const { data } = await transport.get(baseUrl + "/Alumnis");
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export const getStaffs = async (payload: string) => {
  try {
    const path = `${baseUrl}/staffs/sector?sector=${payload}`;
    const { data } = await transport.get(
      `${baseUrl}/staffs/sector?sector=${payload}`
    );
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};
