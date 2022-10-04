import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import Menu from "./Menu";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Menu component", () => {
  describe("When rendered", () => {
    test("Then it should show links sign up, log in, exercises adn create exercises", () => {
      render(
        <Wrapper>
          <Menu />
        </Wrapper>
      );

      const signUpLink = screen.getByText("Sign up");
      const logInLink = screen.getByText("Log In");
      const exercisesLink = screen.getByText("Exercises");
      const createExerciseLink = screen.getByText("Create Exercise");

      expect(signUpLink).toBeInTheDocument();
      expect(logInLink).toBeInTheDocument();
      expect(exercisesLink).toBeInTheDocument();
      expect(createExerciseLink).toBeInTheDocument();
    });
  });
});
