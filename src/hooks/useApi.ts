import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadAllExercisesactionCreator } from "../features/store/exercisesSlice";

const useApi = () => {
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllExercises = useCallback(async () => {
    const response: Response = await fetch(`${apiUrl}/exercises` as string);
    const data = await response.json();
    const { exercises } = data;
    dispatch(loadAllExercisesactionCreator(exercises));
  }, [apiUrl, dispatch]);

  return { getAllExercises };
};

export default useApi;
