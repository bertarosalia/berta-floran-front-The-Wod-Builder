import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";
const CardExercisesStyled = styled.div`
  .card__container {
    width: 500px;
    height: 300px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: ${styledMainTheme.background};
    margin: 40px;
    padding-right: 20px;
  }

  .card__image {
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 20px;
    cursor: pointer;
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
    margin: 10px 5px;
    font-size: 20px;
  }

  .info__data--description {
    padding-left: 24px;
    margin: 10px 5px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }

  .card-button {
    &__edit {
      border: none;
      outline: none;
      border-radius: 20px;
      margin: 40px 30px;
      height: 40px;
      width: 100px;
      padding: 5px;
      text-align: center;
      font-weight: bold;
      font-size: 17px;
      cursor: pointer;
      color: ${styledMainTheme.white};
      background-color: ${styledMainTheme.buttonEdit};
      font-family: ${styledMainTheme.primaryFont};

      &:hover {
        background-color: inherit;
        font-size: 18px;
        outline: auto;
      }
    }

    &__delete {
      border: none;
      outline: none;
      border-radius: 20px;
      margin: 40px 30px;
      height: 40px;
      width: 100px;
      padding: 5px;
      text-align: center;
      font-weight: bold;
      font-size: 17px;
      color: ${styledMainTheme.black};
      background-color: ${styledMainTheme.buttonDelete};
      font-family: ${styledMainTheme.primaryFont};
      cursor: pointer;

      &:hover {
        background-color: inherit;
        font-size: 18px;
        outline: auto;
      }
    }
  }
`;

export default CardExercisesStyled;
