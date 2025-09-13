import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./features/sideBarSlice";

export const store = () => {
  return configureStore({
    reducer: {
      SideBarReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
