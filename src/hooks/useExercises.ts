import { useCallback } from "react";
import { useDispatch } from "react-redux";
import IExercise from "../features/interfaces";
import {
  createExerciseActionCreator,
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "../features/store/exercisesSlice";

const useExercises = () => {
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllExercises = useCallback(async () => {
    try {
      const response: Response = await fetch(`${apiUrl}/exercises` as string);
      const data = await response.json();
      const { exercises } = data;
      dispatch(loadAllExercisesactionCreator(exercises));
    } catch {}
  }, [apiUrl, dispatch]);

  const deleteExercise = async (deleteId: IExercise["id"]) => {
    try {
      await fetch(`${apiUrl}/${deleteId}`, {
        method: "DELETE",
      });
      dispatch(deleteExerciseActionCreator(deleteId as string));
    } catch {}
  };

  const createExercise = async (newExercise: IExercise) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExercise),
      });
      const { exercise } = await response.json();

      dispatch(createExerciseActionCreator(exercise));
    } catch {}
  };
  return { getAllExercises, deleteExercise, createExercise };
};
export default useExercises;
