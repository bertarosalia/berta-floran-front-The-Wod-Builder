import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RegisterForm from "./RegisterForm";

describe("Given the Register component", () => {
  describe("When it's instantiated", () => {
    const namePlaceholder = "Name";
    const emailPlaceholder = "Email";
    const passwordPlaceholder = "Password";
    const passwordRepeatPlaceholder = "Repeat password";

    test("Then should show name and password inputs", () => {
      render(<RegisterForm />);
      const nameInput = screen.getByPlaceholderText(namePlaceholder);
      const userEmailInput = screen.getByPlaceholderText(emailPlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
      const userPasswordRepeatInput = screen.getByPlaceholderText(
        passwordRepeatPlaceholder
      );

      expect(nameInput).toBeInTheDocument();
      expect(userEmailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(userPasswordRepeatInput).toBeInTheDocument();
    });

    describe("And user type 'Iván' in name input", () => {
      test("Then should show 'Iván' in name input", async () => {
        const nameTextInput = "Iván";

        render(<RegisterForm />);

        const nameInput = screen.getByPlaceholderText(namePlaceholder);
        await userEvent.type(nameInput, nameTextInput);

        expect(nameInput).toHaveValue(nameTextInput);
      });
    });

    describe("And user type 'ivan@hotmail.com' in email input", () => {
      test("Then should show 'ivan@hotmail.com' in email input", async () => {
        const emailTextInput = "ivan@hotmail.com";

        render(<RegisterForm />);

        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        await userEvent.type(emailInput, emailTextInput);

        expect(emailInput).toHaveValue(emailTextInput);
      });
    });

    describe("And user type '12345' in password input", () => {
      test("Then should show '12345' in password input", async () => {
        const passwordTextInput = "12345";

        render(<RegisterForm />);

        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        await userEvent.type(passwordInput, passwordTextInput);

        expect(passwordInput).toHaveValue(passwordTextInput);
      });
    });

    describe("And user type 'patatasfritas' in repeat password input", () => {
      test("Then should show 'patatasfritas' in repeat password input", async () => {
        const passwordRepeatTextInput = "patatasfritas";

        render(<RegisterForm />);

        const passwordRepeatInput = screen.getByPlaceholderText(
          passwordRepeatPlaceholder
        );
        await userEvent.type(passwordRepeatInput, passwordRepeatTextInput);

        expect(passwordRepeatInput).toHaveValue(passwordRepeatTextInput);
      });
    });
  });
});
