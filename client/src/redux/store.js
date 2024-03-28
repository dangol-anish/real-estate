import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// combined all the available reducers here
const rootReducer = combineReducers({
  user: userReducer,
});

// added the basic configuration for the persistence of reducer data in storage (by default: localstorage)
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// persisted all the available reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   user: userReducer,
  // },

  // added all the reducers in one place rather than separate k-v pair for each reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
