import React, { SyntheticEvent, useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const minLength = 5;

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setFormData(initialState);
  };

  const isFormValid =
    formData.email.length > minLength && formData.password.length > minLength;

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
                placeholder="email"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <input
                type={"text"}
                value={formData.password}
                name="password"
                placeholder="password"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="login-form__button">
              <button
                className={`login-form__button${
                  !isFormValid ? " button-disabled" : ""
                }`}
                type="submit"
                disabled={!isFormValid}
              >
                {"LOGIN"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
