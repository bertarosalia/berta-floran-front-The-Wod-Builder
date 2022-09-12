import { useNavigate } from "react-router-dom";
import CardDetailStyled from "./CardDetailStyled";

interface CardExercisesProps {
  body: string;
  name: string;
  description?: string;
  image: string;
  id?: string;
}

const CardDetail = ({
  body,
  name,
  description,
  image,
  id,
}: CardExercisesProps): JSX.Element => {
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
