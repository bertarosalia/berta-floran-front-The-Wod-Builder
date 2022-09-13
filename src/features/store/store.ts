import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import exercisesReducer from "./exercises/exercisesSlice";
import { UIReducer } from "./UI/UISlice";

export const store = configureStore({
  reducer: {
    exercisesReducer: exercisesReducer,
    ui: UIReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
