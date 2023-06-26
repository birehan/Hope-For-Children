import { combineReducers } from '@reduxjs/toolkit';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  authState: boolean;
  authUser: {username: string, password:string} | null
}

const initialState: AuthState = {
  authState: false,
  authUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<boolean>) {
      state.authState = action.payload;
    },
    setAuthUser(state, action: PayloadAction<{username: string, password:string}>) {
      state.authUser = action.payload;
    },
  },
});

export const { setAuthState, setAuthUser } = authSlice.actions;

export const authReducer = authSlice.reducer;

