import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a login form component", () => {
  describe("When is instantiated", () => {
    const emailPlaceholder = "email";
    const passwordPlaceholder = "password";

    const userEmailTxtInput = "manuela@manuela.com";
    const userPasswordTextInput = "123456";

    test("It should show email and password inputs", () => {
      render(<LoginForm />);
      const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);
      const userPasswordInput =
        screen.getByPlaceholderText(passwordPlaceholder);

      expect(userEmailInput).toBeInTheDocument();
      expect(userPasswordInput).toBeInTheDocument();
    });
    describe("And user type 'manuela@manuela.com' in email input", () => {
      test("Then should show 'manuela@manuela.com' in email input", async () => {
        render(<LoginForm />);

        const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);

        await UserEvent.type(userEmailInput, userEmailTxtInput);

        expect(userEmailInput).toHaveValue(userEmailTxtInput);
      });
    });
    describe("And user type '123456' in password input", () => {
      test("Then it should show '123456' in password input", async () => {
        render(<LoginForm />);

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

        await UserEvent.type(passwordInput, userPasswordTextInput);

        expect(passwordInput).toHaveValue(userPasswordTextInput);
      });
    });
  });
});
