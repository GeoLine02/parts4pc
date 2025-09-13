import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  isSideBarOpen: boolean;
}

export const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: <initialStateType>{
    isSideBarOpen: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
