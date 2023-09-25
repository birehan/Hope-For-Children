import axios from "axios";
import { API_BASE_URL } from "../config";
import { AuthType } from "../types/user";

export const userLoginApi = async (user: AuthType) => {
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_API_URL + "/Account/login",
      user
    );
    return data.value;
  } catch (error) {
    throw new Error("Server Error");
  }
};
