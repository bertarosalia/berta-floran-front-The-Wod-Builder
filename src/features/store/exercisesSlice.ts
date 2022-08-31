import IExercise from "../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inititialStateExercises: IExercise[] = [];

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: inititialStateExercises,
  reducers: {
    loadAllExercises: (state, action: PayloadAction<IExercise[]>) =>
      action.payload,
  },
});

export const { loadAllExercises } = exercisesSlice.actions;
const exercisesReducer = exercisesSlice.reducer;

export default exercisesReducer;
