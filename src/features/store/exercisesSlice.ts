import IExercise from "../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inititialStateExercises: IExercise[] = [];

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: inititialStateExercises,
  reducers: {
    loadAllExercises: (_state, action: PayloadAction<IExercise[]>) => [
      ...action.payload,
    ],
    deleteExercise: (exercises, action: PayloadAction<string>) =>
      exercises.filter((exercise) => exercise.id !== action.payload),
  },
});
export const exercisesReducer = exercisesSlice.reducer;

export const { loadAllExercises: loadAllExercisesactionCreator } =
  exercisesSlice.actions;

export const { deleteExercise: deleteExerciseActionCreator } =
  exercisesSlice.actions;

export default exercisesReducer;
