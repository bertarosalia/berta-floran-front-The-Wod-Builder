import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import CardDetailStyled from "./CardDetailStyled";

const CardDetail = (): JSX.Element => {
  const exercises = useAppSelector((state: RootState) => state.exercises);

  const { id } = useParams();
  const idToModify = id?.replace(":", "");
  const exerciseToShow = exercises.find(
    (exercise) => exercise.id === idToModify
  );

  const dataEmpty = {
    body: "",
    name: "",
    description: "",
    image: "",
    id: "",
  };
  let exerciseData = dataEmpty;

  if (exerciseToShow) {
    exerciseData = exerciseToShow;
  }
  const { body, name, description, image } = exerciseData;

  const navigate = useNavigate();
  const backToList = (event: { stopPropagation: () => void }): void => {
    event.stopPropagation();
    navigate(`/exercises`);
  };

  return (
    <>
      <CardDetailStyled>
        <div className="card-detail__container">
          <input
            type="button"
            onClick={backToList}
            className="card-detail__button--close"
            value={"X"}
          />
          <h1 className="card-detail__title">{name}</h1>
          <img className="card-detail__image" src={image} alt={name} />
          <ul className="card-detail__info" key={id}>
            <li className="info__data">Name: {name}</li>
            <li className="info__data">Body: {body}</li>
            <li className="info__data--description">
              Description: {description}
            </li>
          </ul>
        </div>
      </CardDetailStyled>
    </>
  );
};

export default CardDetail;
