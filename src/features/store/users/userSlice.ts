import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserLoginState } from "./model/user";

const userInitialState: UserLoginState = {
  isLogged: false,
  user: {
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (_previousUI: UserLoginState, action: PayloadAction<User>) => ({
      isLogged: true,
      user: { ...action.payload },
    }),
    logoutUser: (_previousUI: UserLoginState) => ({ ...userInitialState }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
