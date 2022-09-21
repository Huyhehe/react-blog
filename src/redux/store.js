import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogReducer from "./blogSlice";
import userReducer from "./userSlice";
import notificationReducer from "./notificationSlice";

const rootReducers = combineReducers({
  blogs: blogReducer,
  user: userReducer,
  notification: notificationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["blogs", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
