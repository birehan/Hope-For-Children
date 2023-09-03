import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../../types/user/authType";

export type authState = {
  user: AuthType | null;
  isLoading: boolean;
  errors: string;
};
const authInitialState: authState = {
  user: null,
  isLoading: false,
  errors: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    LoginAction: (
      state: authState,
      { payload: user }: PayloadAction<AuthType>
    ) => {
      console.log(user,"action")
      state.isLoading = true;
      state.errors = "";
    },
    LoginSuccessAction: (
      state: authState,
      { payload: user }: PayloadAction<AuthType>
    ) => {
      localStorage.setItem('user',JSON.stringify(user))
      state.user = user;
    },
    LoginErrorAction: (
      state: authState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
    },
  },
});

export const { LoginAction, LoginSuccessAction, LoginErrorAction } =
  authSlice.actions;

export default authSlice;
