import CardExercisesStyled from "./CardExercisesStyled";

const CardExercises = (): JSX.Element => {
  return (
    <>
      <CardExercisesStyled>
        <img
          width={"180px"}
          height={"200px"}
          className="card__image"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg"
          alt="deadlift"
        />
        <ul className="card__info">
          <li className="info__data">Name: </li>
          <li className="info__data">Body: </li>
          <li className="info__data">Description: </li>
        </ul>
      </CardExercisesStyled>
    </>
  );
};

export default CardExercises;
