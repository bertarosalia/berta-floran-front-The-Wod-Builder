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
    width: 800px;
    height: 40px;
    background-color: ${styledMainTheme.inputs};
    font-family: ${styledMainTheme.primaryFont};
    font-size: 15px;
    font-weight: bolder;
    border-radius: 10px;
    margin: 10px 0 30px;
    cursor: text;
    text-align: center;
  }

  .register-form__input--password {
    width: 800px;
    height: 40px;
    background-color: ${styledMainTheme.inputs};
    font-family: ${styledMainTheme.primaryFont};
    font-size: 15px;
    font-weight: bolder;
    border-radius: 10px;
    margin: 10px 0 20px;
    cursor: text;
    text-align: center;
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
    cursor: pointer;
    margin: 20px;

    &:hover {
      background-color: inherit;
      outline: auto;
    }
  }

  .register-form__inputs--container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .register-form__button {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .register-form__login-link {
    margin: 40px;
  }
`;

export default RegisterFormStyled;
