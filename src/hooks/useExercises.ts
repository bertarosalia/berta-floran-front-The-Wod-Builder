import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../app/hooks";
import IExercise from "../features/interfaces";
import {
  createExerciseActionCreator,
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "../features/store/exercisesSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const useExercises = () => {
  const dispatch = useAppDispatch();

  const getAllExercises = useCallback(async (): Promise<void> => {
    const loadExercisesUrl = `${apiUrl}/exercises` as string;

    try {
      const {
        data: { exercises },
      } = await axios.get(loadExercisesUrl);
      dispatch(loadAllExercisesactionCreator(exercises));
    } catch (error) {}
  }, [dispatch]);

  const deleteExercise = async (deleteId: string) => {
    try {
      await axios.delete(`${apiUrl}/${deleteId}`);

      dispatch(deleteExerciseActionCreator(deleteId));
    } catch {}
  };

  const getOneExerciseById = async (exerciseId: string) => {
    try {
      const {
        data: { exercise },
      } = await axios.get(`${apiUrl}/${exerciseId}`);
      return exercise;
    } catch (error) {}
  };

  const createExercise = useCallback(
    async (newExercise: IExercise) => {
      try {
        const {
          data: { exerciseCreated },
        } = await axios.post(`${apiUrl}/create`, newExercise);
        dispatch(createExerciseActionCreator(exerciseCreated));
        return exerciseCreated;
      } catch {}
    },
    [dispatch]
  );
  return {
    getAllExercises,
    deleteExercise,
    createExercise,
    getOneExerciseById,
  };
};

export default useExercises;
