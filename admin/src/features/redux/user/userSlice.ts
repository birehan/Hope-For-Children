import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";

export type userState = {
  user: User | null;
  isLoading: boolean;
  errors: string;
};
const authInitialState: userState = {
  user: null,
  isLoading: false,
  errors: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: authInitialState,
  reducers: {
    CreateUserAction: (
      state: userState,
      { payload: user }: PayloadAction<User>
    ) => {
      state.isLoading = true;
      state.errors = "";
    },
    CreateUserSuccessAction: (
      state: userState,
      { payload: user }: PayloadAction<User>
    ) => {
      localStorage.setItem('user',JSON.stringify(user))
      state.user = user;
    },
    CreateUserErrorAction: (
      state: userState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
    },
  },
});
export const { CreateUserAction,CreateUserSuccessAction,CreateUserErrorAction } =
  userSlice.actions;

export default userSlice;
