import { useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllExercises = useCallback(async () => {
    try {
      dispatch(showLoaderActionCreator());

      const response = await fetch(`${apiUrl}/exercises`);

      const data = await response.json();

      dispatch(closeLoaderActionCreator());
      dispatch(loadAllExercisesactionCreator(data));
    } catch {}
  }, [apiUrl, dispatch]);

  const deleteExercise = useCallback(
    async (deleteId: string) => {
      try {
        const response = await fetch(`${apiUrl}/:${deleteId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error();
        }
      } catch (error) {
        errorModal("Uh, no! You need to take action! Something went wrong!");
      }
      dispatch(deleteExerciseActionCreator(deleteId));
      successModal(
        "Good news, everyone! Nothing to worry about, exercise has been deleted successfully!"
      );
    },
    [apiUrl, dispatch]
  );

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
      successModal(
        "Nothing to worry about! Exercise has been created successfully!"
      );
      dispatch(createExerciseActionCreator(exercise));
      return exercise;
    } catch (error) {
      errorModal(
        "Uh, no! You need to take action! Exercise has not been deleted successfully! Try again!"
      );
    }
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
      } catch (error) {
        errorModal(
          "Ups! Cannot show details from this exercise now. Try again"
        );
        navigate("/not-found-error");
      }
    },
    [apiUrl, navigate]
  );

  return {
    getAllExercises,
    deleteExercise,
    createExercise,
    getOneExerciseById,
  };
};
export default useExercises;
