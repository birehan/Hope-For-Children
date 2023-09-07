import axios from "axios";
import routes from "../Routes";

axios.defaults.withCredentials = true;

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const transport = axios.create({
  withCredentials: true,
});

const apiBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

transport.interceptors.request.use(
  (config) => config,
  (error) => {
    routes.navigate("/error/500", {
      state: { path: routes.state.location.pathname },
    });
    return Promise.reject(error);
  }
);

// Set up Axios interceptors
transport.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (process.env.NODE_ENV === "development") await sleep(1000);
    routes.navigate("/error/500", {
      state: { path: routes.state.location.pathname },
    });
    return Promise.reject(error);
  }
);

const makeRequest = async (endpoint: string) => {
  const { data } = await transport.get(apiBaseUrl + endpoint, {
    timeout: 100000,
  });
  return data.value;
};

export const getProjects = async () => {
  return makeRequest("/projects");
};

export const getProjectDetail = async (payload: string) => {
  return makeRequest(`/projects/${payload}`);
};

export const getGalleries = async () => {
  return makeRequest("/categories");
};

export const getGalleryDetail = async (payload: string) => {
  return makeRequest(`/categories/${payload}`);
};

export const getAlumniStudents = async () => {
  return makeRequest("/Alumnis");
};

export const getStaffs = async (payload: string) => {
  return makeRequest(`/staffs/sector?sector=${payload}`);
};
