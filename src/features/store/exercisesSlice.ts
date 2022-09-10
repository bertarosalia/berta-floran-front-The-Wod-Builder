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
    createExercise: (
      inititialStateExercises,
      action: PayloadAction<IExercise>
    ) => [...inititialStateExercises, action.payload],
  },
});
export const { reducer: exercisesReducer } = exercisesSlice;

export const {
  loadAllExercises: loadAllExercisesactionCreator,
  deleteExercise: deleteExerciseActionCreator,
  createExercise: createExerciseActionCreator,
} = exercisesSlice.actions;

export default exercisesReducer;
