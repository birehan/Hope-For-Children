import axios from "axios";
import { API_BASE_URL } from "../config";
import { AuthType, User } from "../types/user";

export const createUserApi = async (user: User) => {
  const userJSON = localStorage.getItem("user");
  const userfromlh = userJSON ? JSON.parse(userJSON) : null;
  try {
    const { data } = await axios.post(
      API_BASE_URL + "/Account/register",user,{
        headers: {
          Authorization: `Bearer ${userfromlh.value.token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error("Server Error");
  }
};
