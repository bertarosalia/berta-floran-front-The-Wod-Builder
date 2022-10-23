import { useCallback } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../app/hooks";
import { IExercise } from "../../features/store/exercises/model/exercises";
import {
  createExerciseActionCreator,
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "../../features/store/exercises/exercisesSlice";
import {
  closeLoaderActionCreator,
  showLoaderActionCreator,
} from "../../features/store/UI/UISlice";

export const errorModal = (error: string) =>
  toast.error(error, {
    position: "top-center",
    duration: 5000,
  });

export const successModal = (message: string) =>
  toast.success(message, {
    position: "top-center",
    duration: 5000,
  });

const useExercises = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllExercises = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());
      const response = await fetch(`${apiUrl}exercises`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      dispatch(closeLoaderActionCreator());
      dispatch(loadAllExercisesactionCreator(data.exercises));
    } catch (error) {
      errorModal("Ups! Cannot show exercise now. Try again");
    }
  }, [apiUrl, dispatch]);

  const deleteExercise = async (exerciseId: string) => {
    try {
      const response = await fetch(`${apiUrl}exercises/${exerciseId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      dispatch(deleteExerciseActionCreator(exerciseId));
      successModal(
        "Good news, everyone! Nothing to worry about, exercise has been deleted successfully!"
      );
    } catch (error) {
      errorModal("Uh, no! You need to take action! Something went wrong!");
    }
  };

  const createExercise = async (newExercise: IExercise) => {
    try {
      const response = await fetch(`${apiUrl}exercises/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExercise),
      });
      const { exercise } = await response.json();
      successModal(
        "Nothing to worry about! Exercise has been created successfully!"
      );
      dispatch(createExerciseActionCreator(exercise));
    } catch (error) {
      errorModal(
        "Uh, no! You need to take action! Exercise has not been created successfully! Try again!"
      );
    }
  };

  const getOneExerciseById = useCallback(
    async (exerciseId: string) => {
      try {
        const response = await fetch(`${apiUrl}exercises/${exerciseId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const { exerciseFound } = await response.json();

        dispatch(loadAllExercisesactionCreator([exerciseFound]));
      } catch (error) {
        errorModal(
          "Ups! Cannot show details from this exercise now. Try again"
        );
      }
    },
    [dispatch, apiUrl]
  );

  return {
    getAllExercises,
    deleteExercise,
    createExercise,
    getOneExerciseById,
  };
};
export default useExercises;
