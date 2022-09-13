import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";
import IExercise from "../../features/interfaces";
import useExercises from "../../hooks/useExercises";

const initialState: IExercise = {
  body: "",
  name: "",
  description: "",
  image: "",
  id: "",
};

const CardDetailPage = (): JSX.Element => {
  const [exercise, setExercise] = useState(initialState);
  const { getOneExerciseById } = useExercises();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const exercise = await getOneExerciseById(id!);
      setExercise(exercise);
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
