import axios from "axios";
import { User } from "../types/types";

export const createUserApi = async (user: User) => {
  const userJSON = localStorage.getItem("user");
  const userfromlh = userJSON ? JSON.parse(userJSON) : null;
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_API_URL + "/Account/register",
      user,
      {
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
