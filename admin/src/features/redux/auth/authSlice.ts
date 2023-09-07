import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../../../types/user";
import router from "../../../Routes/Routes";

export type authState = {
  user: AuthType | null;
  isLoading: boolean;
  errors: string;
};
const authInitialState: authState = {
  user: JSON.parse(localStorage.getItem("user") || ""),
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
      state.isLoading = true;
      state.errors = "";
    },
    LoginSuccessAction: (
      state: authState,
      { payload: user }: PayloadAction<AuthType>
    ) => {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
      router.navigate("/");
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
