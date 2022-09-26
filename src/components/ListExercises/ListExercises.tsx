import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useExercises from "../../hooks/useExercises/useExercises";
import CardExercises from "../CardExercises/CardExercises";
import ListExercisesStyled from "./ListExercisesStyled";

const ListExercises = (): JSX.Element => {
  const { getAllExercises } = useExercises();

  const exercises = useAppSelector((state: RootState) => state.exercises);

  useEffect(() => {
    (async () => {
      await getAllExercises();
    })();
  }, [getAllExercises]);

  return (
    <>
      <ListExercisesStyled>
        <ul className="exercises-list">
          {exercises.map((exercise) => (
            <li className="exercises-list__item" key={exercise.id}>
              <CardExercises
                body={exercise.body}
                name={exercise.name}
                description={exercise.description}
                image={exercise.image}
                id={exercise.id}
              />
            </li>
          ))}
        </ul>
      </ListExercisesStyled>
    </>
  );
};

export default ListExercises;
