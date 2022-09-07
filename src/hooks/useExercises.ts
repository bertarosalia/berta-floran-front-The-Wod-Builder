import { useCallback } from "react";
import { useDispatch } from "react-redux";
import IExercise from "../features/interfaces";
import {
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
      dispatch(deleteExerciseActionCreator(deleteId));
    } catch {}
  };
  return { getAllExercises, deleteExercise };
};
export default useExercises;
