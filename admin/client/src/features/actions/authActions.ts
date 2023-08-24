import axios from 'axios'

export const fetchUserApi = async (user: { username: string, password: string }): Promise<any>  => {
  try {
    const response = await axios.post("/api/user",user);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};
