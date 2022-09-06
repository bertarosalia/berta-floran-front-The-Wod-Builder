import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useApi from "../../hooks/useApi";
import Button from "../Button/Button";
import CardExercises from "../CardExercises/CardExercises";
import ListExercisesStyled from "./ListExercisesStyled";

const ListExercises = (): JSX.Element => {
  const { getAllExercises } = useApi();
  const exercises = useSelector((state: RootState) => state.exercises);

  useEffect(() => {
    getAllExercises();
  }, [getAllExercises]);

  return (
    <>
      <ListExercisesStyled>
        <h1 className="exercises-list__title">Exercises</h1>

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
