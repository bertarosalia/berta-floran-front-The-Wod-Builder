import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";
const CardExercisesStyled = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: ${styledMainTheme.background};
  margin: 20px;
  padding-right: 20px;

  .card__image {
    object-fit: cover;
    width: 200px;
    height: 200px;
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
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .card-button {
    &__edit {
      border: none;
      outline: none;
      border-radius: 20px;
      margin: 40px 20px;
      height: 40px;
      width: 120px;
      padding: 5px;
      text-align: center;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
      color: ${styledMainTheme.white};
      background-color: ${styledMainTheme.buttonEdit};

      &:hover {
        background-color: inherit;
        font-size: 16px;
        outline: auto;
      }
    }

    &__delete {
      border: none;
      outline: none;
      border-radius: 20px;
      margin: 40px 20px;
      height: 40px;
      width: 120px;
      padding: 5px;
      text-align: center;
      font-weight: bold;
      font-size: 15px;
      color: ${styledMainTheme.black};
      background-color: ${styledMainTheme.buttonDelete};
      cursor: pointer;

      &:hover {
        background-color: inherit;
        font-size: 16px;
        outline: auto;
      }
    }
  }
`;

export default CardExercisesStyled;
