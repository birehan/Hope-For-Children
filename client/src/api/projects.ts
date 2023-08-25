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
