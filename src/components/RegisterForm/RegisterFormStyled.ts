import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const RegisterFormStyled = styled.section`
  justify-content: center;

  .register-form__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .register-form__title {
    color: ${styledMainTheme.white};
    text-align: center;
    font-size: 25px;
  }

  .register-form__input {
    width: 400px;
    height: 40px;
    background-color: ${styledMainTheme.inputs};
    font-family: ${styledMainTheme.primaryFont};
    font-size: 15px;
    font-weight: bolder;
    border-radius: 10px;
    margin: 10px 0 30px;
    text-align: center;
    @media (min-width: 700px) {
      width: 800px;
      cursor: text;
    }
  }

  .register-form__input--password {
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

  .register-user__button {
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

  .register-form__inputs--container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .register-form__button--container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .register-form__login {
    margin-bottom: 30px;
    font-size: 18px;
    color: ${styledMainTheme.white};
    @media (min-width: 700px) {
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;

export default RegisterFormStyled;
