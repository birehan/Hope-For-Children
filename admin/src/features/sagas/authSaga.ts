import { PayloadAction } from "@reduxjs/toolkit";
import { AuthType } from "../types/user/authType";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { LoginErrorAction, LoginSuccessAction } from "../redux/auth/authSlice";


function* userLogin({ payload: user }: PayloadAction<AuthType>) {
    try {
      const response: AxiosResponse<AuthType> = yield axios.post('https://hope-for-children.onrender.com/api/Account/login',user);
      console.log(response.data,"datta")
      yield put(LoginSuccessAction(response.data));
    } catch (error) {
      yield put(LoginErrorAction("something went wrong"));
    }
  }
  
  export function* watchUserLogin() {
    yield takeLatest('auth/LoginAction', userLogin);
  }