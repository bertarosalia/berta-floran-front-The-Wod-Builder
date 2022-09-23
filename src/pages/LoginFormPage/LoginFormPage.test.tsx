import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../features/store/store";
import LoginFormPage from "./LoginFormPage";

describe("Given a login form page", () => {
  const emailPlaceholder = "Email";
  const passwordPlaceholder = "Password";

  const emailTextInput = "manuela@manuela.com";
  const passwordTextInput = "123456";
  describe("When it´s instantiated", () => {
    test("It shoul show two inputs inside", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginFormPage />
          </BrowserRouter>
        </Provider>
      );
      const userNameInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(userNameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
    describe("And user type 'manuela@manuela.com' in email input", () => {
      test("Then should show 'manuela@manuela.com' in email input", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginFormPage />
            </BrowserRouter>
          </Provider>
        );

        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        await userEvent.type(emailInput, emailTextInput);

        expect(emailInput).toHaveValue(emailTextInput);
      });
    });

    describe("And user type '12345' in password input", () => {
      test("Then should show '12345' in password input", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginFormPage />
            </BrowserRouter>
          </Provider>
        );

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        await userEvent.type(passwordInput, passwordTextInput);

        expect(passwordInput).toHaveValue(passwordTextInput);
      });
    });
  });
});
