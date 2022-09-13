import CardExercisesStyled from "./CardExercisesStyled";
import useExercises from "../../hooks/useExercises";
import { useNavigate } from "react-router-dom";
interface CardExercisesProps {
  body: string;
  name: string;
  description?: string;
  image: string;
  id?: string;
}

const CardExercises = ({
  body,
  name,
  image,
  id,
}: CardExercisesProps): JSX.Element => {
  const { deleteExercise } = useExercises();
  const exerciseDelete = () => {
    deleteExercise(id as string);
  };

  const navigate = useNavigate();
  const detailExercise = (event: { stopPropagation: () => void }): void => {
    event.stopPropagation();
    navigate(`/details/:${id}`);
  };

  return (
    <>
      <CardExercisesStyled>
        <div className="card__container">
          <img
            className="card__image"
            src={image}
            alt={name}
            onClick={detailExercise}
          />
          <ul className="card__info" key={id}>
            <li className="info__data">Name: {name}</li>
            <li className="info__data">Body: {body}</li>
            <li className="info__data--description" onClick={detailExercise}>
              Description: Read More
            </li>
          </ul>
          <div className="card-button">
            <input type="button" className="card-button__edit" value="EDIT" />
            <input
              type="button"
              className="card-button__delete"
              data-testid="icon-trash"
              value="DELETE"
              onClick={exerciseDelete}
            />
          </div>
        </div>
      </CardExercisesStyled>
    </>
  );
};

export default CardExercises;
