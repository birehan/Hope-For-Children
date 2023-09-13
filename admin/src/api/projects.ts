import axios, { AxiosResponse } from "axios";
import {
  ApiResponse,
  CreateProject,
  Project,
  UpdateProject,
} from "../types/types";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const setUpAxiosIntercept = (user: any) => {
  axios.interceptors.request.use((config) => {
    // const { user } = useSelector((state: any) => state.authReducer);
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  });
};
const responseBody = <T>(response: AxiosResponse<ApiResponse<T>>) =>
  response.data.value;

const requests = {
  get: <T>(url: string) => axios.get<ApiResponse<T>>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<ApiResponse<T>>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) =>
    axios.put<ApiResponse<T>>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<ApiResponse<T>>(url).then(responseBody),
};

const Projects = {
  list: () => requests.get<Project[]>("/projects"),
  create: (project: CreateProject) =>
    requests.post<Project>("/projects", project),
  update: (project: UpdateProject) =>
    requests.put<Project>(`/projects`, project),
    

  //   details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  //   update: (activity: ActivityFormValues) =>
  //     requests.put<void>(`/activities/${activity.id}`, activity),
  //   delete: (id: string) => requests.del<void>(`/activities/${id}`),
  //   attend: (id: string) => requests.post<void>(`/activities/${id}/attend`, {}),
};

export default Projects;
