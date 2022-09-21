import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import CardDetail from "../../components/CardDetail/CardDetail";
import { ExerciseFromDB } from "../../features/store/exercises/model/exercises";
import useExercises from "../../hooks/useExercises/useExercises";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: ExerciseFromDB = {
  body: "",
  name: "",
  description: "",
  image: "",
  id: "",
};

const CardDetailPage = (): JSX.Element => {
  const { getOneExerciseById } = useExercises();

  const [exercise] = useAppSelector((state: RootState) => state.exercises);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await getOneExerciseById(id as string);
    })();
  }, [getOneExerciseById, id]);

  return (
    <>
      <CardDetail
        body={exercise.body}
        name={exercise.name}
        description={exercise.description}
        image={exercise.image}
        id={exercise.id}
      />
    </>
  );
};

export default CardDetailPage;
