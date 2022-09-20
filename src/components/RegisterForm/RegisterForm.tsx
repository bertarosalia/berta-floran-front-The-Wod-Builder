import { useState } from "react";
import RegisterFormStyled from "./RegisterFormStyled";

export const RegisterForm = (): JSX.Element => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isSamePassword = formData.password === formData.repeat_password;

  const isFormValid =
    formData.name !== "" &&
    formData.email !== "" &&
    formData.password !== "" &&
    formData.repeat_password !== "" &&
    isSamePassword;

  return (
    <>
      <RegisterFormStyled>
        <div className="register-form__container">
          <h1 className="register-form__title">{"Join us !"}</h1>

          <div className="register-form__inputs--container">
            <form onSubmit={() => {}} noValidate>
              <div>
                <input
                  className="register-form__input"
                  type="text"
                  value={formData.name}
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <input
                  className="register-form__input"
                  type="email"
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
                  className="register-form__input"
                  type="password"
                  value={formData.password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <input
                  className={!isSamePassword ? "password-incorrect" : ""}
                  type="password"
                  value={formData.repeat_password}
                  name="repeat_password"
                  placeholder="Repeat password"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="register-form__button">
                <button
                  className={`register-user__button${
                    !isFormValid ? " button-disabled" : ""
                  }`}
                  type="submit"
                  disabled={!isFormValid}
                >
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="register-form__footer">
              <span className="register-form__login">
                {"Have already account?"}
                <span className="register-form__login-link">Log in</span>
              </span>
            </div>
          </div>
        </div>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
