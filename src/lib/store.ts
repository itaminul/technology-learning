import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./redux/features/bookSlice";
const rootReducer = combineReducers({
  booking: bookSlice,
});
const middleware = (getDefaultMiddleware: any) => 
  getDefaultMiddleware().concat([

  ])
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer, middleware
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
