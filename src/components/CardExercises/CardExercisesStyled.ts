import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";
const CardExercisesStyled = styled.div`
  .card__container {
    display: flex;
    align-items: center;
    background-color: ${styledMainTheme.background};
    margin-bottom: 60px;
    @media (min-width: 700px) {
      margin: 40px;
    }
  }

  .card__image {
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-left: 5;
    @media (min-width: 700px) {
      cursor: pointer;
      &:hover {
        outline: auto;
      }
    }
  }

  .card__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    text-decoration: underline;
    @media (min-width: 700px) {
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }

  .card-button {
    &__delete {
      border: none;
      outline: none;
      border-radius: 20px;
      margin-left: 30px;
      margin-top: 20px;
      height: 40px;
      width: 90px;
      padding: 5px;
      text-align: center;
      font-weight: bold;
      font-size: 15px;
      color: ${styledMainTheme.black};
      background-color: ${styledMainTheme.buttonDelete};
      font-family: ${styledMainTheme.primaryFont};

      @media (min-width: 700px) {
        cursor: pointer;
        &:hover {
          background-color: inherit;
          outline: auto;
        }
      }
    }
  }
`;

export default CardExercisesStyled;
