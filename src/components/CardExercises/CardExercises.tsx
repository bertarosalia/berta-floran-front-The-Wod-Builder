import CardExercisesStyled from "./CardExercisesStyled";
import useExercises from "../../hooks/useExercises/useExercises";
import { useNavigate } from "react-router-dom";
interface CardExercisesProps {
  body: string;
  name: string;
  description?: string;
  image: string;
  id: string;
}

const CardExercises = ({
  body,
  name,
  image,
  id,
}: CardExercisesProps): JSX.Element => {
  const { deleteExercise } = useExercises();

  const navigate = useNavigate();

  const detailExercise = () => {
    navigate(`/detail/${id}`);
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
          <div className="container-mobile">
            <ul className="card__info" key={id}>
              <li className="info__data">Name: {name}</li>
              <li className="info__data">Body: {body}</li>
              <li className="info__data--description" onClick={detailExercise}>
                Description: Read More
              </li>
            </ul>
            <input
              type="button"
              className="card-button__delete"
              value="DELETE"
              onClick={() => deleteExercise(id)}
            />
          </div>
        </div>
      </CardExercisesStyled>
    </>
  );
};

export default CardExercises;
