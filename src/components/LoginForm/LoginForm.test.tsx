import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import LoginForm from "./LoginForm";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a login form component", () => {
  describe("When is instantiated", () => {
    const emailPlaceholder = "Email";
    const passwordPlaceholder = "Password";

    const userEmailTxtInput = "manuela@manuela.com";
    const userPasswordTextInput = "123456";

    test("It should show email and password inputs", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);
      const userPasswordInput =
        screen.getByPlaceholderText(passwordPlaceholder);

      expect(userEmailInput).toBeInTheDocument();
      expect(userPasswordInput).toBeInTheDocument();
    });
    describe("And user type 'manuela@manuela.com' in email input", () => {
      test("Then should show 'manuela@manuela.com' in email input", async () => {
        render(
          <Provider store={store}>
            <LoginForm />
          </Provider>
        );

        const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);

        await UserEvent.type(userEmailInput, userEmailTxtInput);

        expect(userEmailInput).toHaveValue(userEmailTxtInput);
      });
    });
    describe("And user type '123456' in password input", () => {
      test("Then it should show '123456' in password input", async () => {
        render(
          <Provider store={store}>
            <LoginForm />
          </Provider>
        );

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

        await UserEvent.type(passwordInput, userPasswordTextInput);

        expect(passwordInput).toHaveValue(userPasswordTextInput);
      });
      describe("When it's called and clicked in the 'SIGN UP' button", () => {
        test("Then it should call navigate with param '/sign-up'", async () => {
          render(
            <Provider store={store}>
              <LoginForm />
            </Provider>
          );

          const navigateLink = screen.getByText(
            "Don´t have an account? SIGN UP"
          );

          await UserEvent.click(navigateLink);

          expect(navigateLink).toBeInTheDocument();
          await expect(mockNavigate).toHaveBeenCalled();
        });
      });
    });
  });
});
