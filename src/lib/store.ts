import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./redux/features/bookSlice";
import { registerApi } from "./redux/services/userRegisterApiService";
const rootReducer = combineReducers({
  booking: bookSlice,
  [registerApi.reducerPath]: registerApi.reducer,
});
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat([registerApi.middleware]);
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
