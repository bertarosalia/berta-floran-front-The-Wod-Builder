import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const CreateExerciseFormStyle = styled.div`
  justify-content: center;

  .create-form__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .create-form__title {
    color: ${styledMainTheme.white};
    text-align: center;
    font-size: 25px;
  }

  .create-form__input {
    width: 400px;
    height: 40px;
    background-color: ${styledMainTheme.inputs};
    font-family: ${styledMainTheme.primaryFont};
    font-size: 15px;
    font-weight: bolder;
    border-radius: 10px;
    margin: 10px 0 20px;
    text-align: center;
    @media (min-width: 700px) {
      width: 800px;
      cursor: text;
    }
  }

  .create-form__label {
    color: ${styledMainTheme.white};
    font-size: 18px;
  }

  .create-exercise__button {
    border-radius: 10px;
    border: none;
    outline: none;
    height: 40px;
    width: 100px;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    font-family: ${styledMainTheme.primaryFont};
    background-color: ${styledMainTheme.buttonBig};
    margin: 20px;
    @media (min-width: 700px) {
      cursor: pointer;

      &:hover {
        background-color: inherit;
        outline: auto;
      }
    }
  }

  .create-form__label--container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .create-form__button--container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 190px;
  }
`;

export default CreateExerciseFormStyle;
