import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/UserServices";
import { modaleApi } from "../services/ModaleServices";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [modaleApi.reducerPath]: modaleApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([userApi.middleware, modaleApi.middleware]),
  });
};

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
