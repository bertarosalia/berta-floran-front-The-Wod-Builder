import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "./model/UI";

const UIInitialState: UIState = {
  isLoadingShowing: false,
  message: "",
  type: true,
};

const UISlice = createSlice({
  name: "ui",
  initialState: UIInitialState,
  reducers: {
    showLoader: (previousUI: UIState) => ({
      ...previousUI,
      isLoadingShowing: true,
    }),

    closeLoader: (previousUI: UIState) => ({
      ...previousUI,
      isLoadingShowing: false,
    }),
  },
});

export const UIReducer = UISlice.reducer;

export const {
  showLoader: showLoaderActionCreator,
  closeLoader: closeLoaderActionCreator,
} = UISlice.actions;
