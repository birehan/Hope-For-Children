import authSlice from "./auth/authSlice";
import { projectSlice } from "./project/projectSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "projects"],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  projects: projectSlice.reducer,
});
const rootReducers = persistReducer(persistConfig, rootReducer);

export default rootReducers;

// const rootReducers = {
//   authReducer: authSlice.reducer,
//   projectReducer: projectSlice.reducer,
// };

// export default rootReducers;
