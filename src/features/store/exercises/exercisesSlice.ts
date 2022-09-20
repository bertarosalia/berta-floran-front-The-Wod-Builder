import { ExerciseFromDB } from "../../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inititialStateExercises: ExerciseFromDB[] = [];

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: inititialStateExercises,
  reducers: {
    loadAllExercises: (
      _previousState,
      action: PayloadAction<ExerciseFromDB[]>
    ) => [...action.payload],

    deleteExercise: (
      previousState,
      action: PayloadAction<string>
    ): ExerciseFromDB[] =>
      previousState.filter((exercise) => exercise.id !== action.payload),

    createExercise: (
      previousState: ExerciseFromDB[],
      action: PayloadAction<ExerciseFromDB>
    ) => [...previousState, action.payload],
  },
});
export const exercisesReducer = exercisesSlice.reducer;

export const { loadAllExercises: loadAllExercisesactionCreator } =
  exercisesSlice.actions;

export const { deleteExercise: deleteExerciseActionCreator } =
  exercisesSlice.actions;

export const { createExercise: createExerciseActionCreator } =
  exercisesSlice.actions;

export default exercisesReducer;
