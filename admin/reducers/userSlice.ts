// reducers/userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface UserState {
  isLoggedIn: boolean;
  user: {
    name: string;
    email: string;
  } | null;
  error: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart(state) {
      state.error = null;
    },
    loginSuccess(
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;

export const loginUser =
  (name: string, email: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginStart());

      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const user = { name, email };
      dispatch(loginSuccess(user));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
