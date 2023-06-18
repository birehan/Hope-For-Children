// store.ts
// store.ts

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
