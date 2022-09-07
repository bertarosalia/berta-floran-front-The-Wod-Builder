import CardExercisesStyled from "./CardExercisesStyled";
import useExercises from "../../hooks/useExercises";
interface CardExercisesProps {
  body: string;
  name: string;
  description: string;
  image: string;
  id: string;
}

const CardExercises = ({
  body,
  name,
  description,
  image,
  id,
}: CardExercisesProps): JSX.Element => {
  const { deleteExercise } = useExercises();

  const exerciseDelete = () => {
    deleteExercise(id);
  };

  return (
    <>
      <CardExercisesStyled>
        <img
          width={"180px"}
          height={"200px"}
          className="card__image"
          src={image}
          alt={name}
        />
        <ul className="card__info" key={id}>
          <li className="info__data">Name: {name}</li>
          <li className="info__data">Body: {body}</li>
          <li className="info__data">Description: {description}</li>
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
      </CardExercisesStyled>
    </>
  );
};

export default CardExercises;
