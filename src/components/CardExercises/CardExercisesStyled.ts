import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";
const CardExercisesStyled = styled.div`
  width: 700px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: ${styledMainTheme.background};
  margin: 20px;

  .card__image {
    object-fit: cover;
    border-radius: 10px;
    margin-left: 30px;
  }

  .card__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${styledMainTheme.white};
  }

  .info__data {
    padding-left: 24px;
    margin-top: 30px;
  }
`;

export default CardExercisesStyled;
