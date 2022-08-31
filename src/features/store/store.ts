import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./exercisesSlice";

export const store = configureStore({
  reducer: {
    exercisesReducer: exercisesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
