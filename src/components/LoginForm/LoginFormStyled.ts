import styled from "styled-components";
import styledMainTheme from "../../styledMainTheme";

const LoginFormStyled = styled.div`
  .login-form__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px;
    align-items: center;
  }

  .login-form__title {
    color: ${styledMainTheme.white};
    text-align: center;
    font-size: 25px;
    margin-bottom: 30px;
  }

  .login-form__inputs--container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-form__input {
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

  .login-form__button {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .login-user__button {
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
    margin-bottom: 40px;
    @media (min-width: 700px) {
      cursor: pointer;

      &:hover {
        background-color: inherit;
        outline: auto;
      }
    }
  }

  .login-form__register {
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

export default LoginFormStyled;
