import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, userLoginState } from "./model/user";

const userInitialState: userLoginState = {
  isLogged: false,
  user: {
    name: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (_previousUI: userLoginState, action: PayloadAction<User>) => ({
      isLogged: true,
      user: { ...action.payload },
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: logiUserActionCreator } = userSlice.actions;
