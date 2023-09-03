import axios from "axios";
import { API_BASE_URL } from "../config";
import { User } from "../types/user";

export const createUserApi = async (user: User) => {
  console.log(user, "userr");
  try {
    const { data } = await axios.post(API_BASE_URL + "/Account/register", user);
    return data;
  } catch (error) {
    throw new Error("Server Error");
  }
};
