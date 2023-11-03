import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";
import productsSlice from "./slices/productsSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: ["messages"],
    whitelist: ["theme", "auth", "user","dashboard"],
  },
  combineReducers({
    auth: authSlice.reducer,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: { ignoreActions: [PERSIST] },
    });
  },
});

export const presistor = persistStore(store);

export const { logout } = authSlice.actions;

export default store;
