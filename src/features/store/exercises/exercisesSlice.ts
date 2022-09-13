import IExercise from "../../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inititialStateExercises: IExercise[] = [];

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: inititialStateExercises,
  reducers: {
    loadAllExercises: (_previousState, action: PayloadAction<IExercise[]>) => [
      ...action.payload,
    ],

    deleteExercise: (
      previousState,
      action: PayloadAction<string>
    ): IExercise[] =>
      previousState.filter((exercise) => exercise.id !== action.payload),

    createExercise: (
      previousState: IExercise[],
      action: PayloadAction<IExercise>
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
