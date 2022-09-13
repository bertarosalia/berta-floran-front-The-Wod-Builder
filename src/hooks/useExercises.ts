import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import IExercise from "../features/interfaces";
import {
  createExerciseActionCreator,
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "../features/store/exercises/exercisesSlice";
import {
  closeLoaderActionCreator,
  showLoaderActionCreator,
} from "../features/store/UI/UISlice";

const useExercises = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllExercises = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());

      const response = await fetch(`${apiUrl}/exercises`);
      const data = await response.json();
      const { exercises } = data;

      dispatch(closeLoaderActionCreator());

      dispatch(loadAllExercisesactionCreator(exercises));
    } catch {}
  }, [apiUrl, dispatch]);

  const deleteExercise = async (deleteId: string) => {
    try {
      const response = await fetch(`${apiUrl}/:${deleteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const exerciseDelete = await response.json();
      return exerciseDelete;
    } catch {}
    dispatch(deleteExerciseActionCreator(deleteId));
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

  const getOneExerciseById = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(`${apiUrl}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const idExercise = await response.json();

        return idExercise;
      } catch {}
    },
    [apiUrl]
  );

  return {
    getAllExercises,
    deleteExercise,
    createExercise,
    getOneExerciseById,
  };
};
export default useExercises;
