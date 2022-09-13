import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import exercisesReducer from "../features/store/exercises/exercisesSlice";
import { UIReducer } from "../features/store/UI/UISlice";

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
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
