import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import rootReducers from "./rootReducers";
import rootSaga from "../sagas/rootSaga";
import { createLogger } from "redux-logger"; // Import the createLogger function

const loggerMiddleware = createLogger(); // Create the logger middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === "development") {
  middlewares.push(loggerMiddleware);
}

const store = configureStore({
  reducer: rootReducers,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);
export default store;
