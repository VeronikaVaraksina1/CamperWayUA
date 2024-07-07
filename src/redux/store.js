import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./adverts/slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const favoritesAdvertPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedFavoritesAdvertReducer = persistReducer(
  favoritesAdvertPersistConfig,
  advertsReducer
);

export const store = configureStore({
  reducer: {
    adverts: persistedFavoritesAdvertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);