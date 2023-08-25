import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projects from "./projectReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["projects"],
};

const rootReducer = combineReducers({
  projects,
});
const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
