import { useDispatch } from "react-redux";
import { loadAllExercises } from "../features/store/exercisesSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const useApi = () => {
  const dispatch = useDispatch();

  const getAllExercises = async () => {
    const response: Response = await fetch(`${apiUrl}/exercises` as string);
    const data = await response.json();
    const { exercises } = data;
    dispatch(loadAllExercises(exercises));
  };
  return { getAllExercises };
};

export default useApi;
