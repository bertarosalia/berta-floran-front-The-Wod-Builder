import CardExercisesStyled from "./CardExercisesStyled";

interface CardExercisesProps {
  body: string;
  name: string;
  description: string;
  image: string;
}

const CardExercises = ({
  body,
  name,
  description,
  image,
}: CardExercisesProps): JSX.Element => {
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
        <ul className="card__info">
          <li className="info__data">Name: {name}</li>
          <li className="info__data">Body: {body}</li>
          <li className="info__data">Description: {description}</li>
        </ul>
      </CardExercisesStyled>
    </>
  );
};

export default CardExercises;
