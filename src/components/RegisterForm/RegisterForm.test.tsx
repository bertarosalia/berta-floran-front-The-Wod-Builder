import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockuserRegister = jest.fn();

jest.mock("../../hooks/useUsers/useUsers", () => () => ({
  userRegister: mockuserRegister,
}));

describe("Given the Register component", () => {
  describe("When it's instantiated", () => {
    const namePlaceholder = "Name";
    const emailPlaceholder = "Email";
    const passwordPlaceholder = "Password";
    const passwordRepeatPlaceholder = "Repeat password";
    const nameTextInput = "Iván";
    const emailTextInput = "ivan@hotmail.com";
    const passwordTextInput = "12345";
    const passwordRepeatTextInput = "12345";

    test("Then should show name, email, password and password repeat inputs", () => {
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

    describe("And user type '12345' in repeat password input", () => {
      test("Then should show '12345' in repeat password input", async () => {
        render(<RegisterForm />);

        const passwordRepeatInput = screen.getByPlaceholderText(
          passwordRepeatPlaceholder
        );
        await userEvent.type(passwordRepeatInput, passwordRepeatTextInput);

        expect(passwordRepeatInput).toHaveValue(passwordRepeatTextInput);
      });
    });
    describe("And user doesn´t type and click on register button", () => {
      test("Then it doesn´t call userRegister function", async () => {
        render(<RegisterForm />);
        const button = screen.getByRole("button", { name: "SIGN UP" });

        await userEvent.click(button);

        expect(mockuserRegister).not.toHaveBeenCalled();
      });
    });
    describe("And user types correctly in form and click on register button", () => {
      test("Then it call userRegister function", async () => {
        render(<RegisterForm />);
        const button = screen.getByRole("button", { name: "SIGN UP" });
        const nameInput = screen.getByPlaceholderText(namePlaceholder);
        const emailInput = screen.getByPlaceholderText(emailPlaceholder);
        const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
        const passwordRepeatInput = screen.getByPlaceholderText(
          passwordRepeatPlaceholder
        );

        await userEvent.type(nameInput, nameTextInput);
        await userEvent.type(emailInput, emailTextInput);
        await userEvent.type(passwordInput, passwordTextInput);
        await userEvent.type(passwordRepeatInput, passwordRepeatTextInput);
        await userEvent.click(button);

        expect(mockuserRegister).toHaveBeenCalled();
      });
      describe("When it's called and clicked in the 'LOG IN' button", () => {
        test("Then it should call navigate with param '/login'", async () => {
          render(<RegisterForm />);

          const navigateLink = screen.getByText(
            "Already have an account? LOG IN"
          );

          await userEvent.click(navigateLink);

          expect(navigateLink).toBeInTheDocument();
          await expect(mockNavigate).toHaveBeenCalled();
        });
      });
    });
  });
});
