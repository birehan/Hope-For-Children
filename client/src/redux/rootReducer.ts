import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projects from "./projectReducer";
import staffs from "./staffReducer";
import alumnis from "./alumniReducer";
import galleries from "./galleryReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["projects", "staffs", "alumnis", "galleries"],
};

const rootReducer = combineReducers({
  projects,
  staffs,
  alumnis,
  galleries,
});
const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
