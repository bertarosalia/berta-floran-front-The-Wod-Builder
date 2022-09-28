import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUsers/useUsers";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const minLength = 5;

  const [formData, setFormData] = useState(initialState);
  const { userLogin } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await userLogin(formData);
    setFormData(initialState);
  };

  const isFormValid =
    formData.email.length > minLength && formData.password.length > minLength;
  const navigate = useNavigate();

  const registerRedirect = () => {
    navigate(`/sign-up`);
  };

  return (
    <LoginFormStyled>
      <div className="login-form__container">
        <h1 className="login-form__title">{"Train with confidence"}</h1>
        <div className="login-form__inputs--container">
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <input
                className="login-form__input"
                type={"text"}
                value={formData.email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <input
                className="login-form__input"
                type={"password"}
                value={formData.password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="login-form__button">
              <button
                className={`login-user__button${
                  !isFormValid ? " button-disabled" : ""
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                {"LOGIN"}
              </button>
            </div>
          </form>
          <div className="login-form__register">
            <span
              className="login-form__register-link"
              onClick={registerRedirect}
            >
              {"Don´t have an account? SIGN UP"}
            </span>
          </div>
        </div>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
