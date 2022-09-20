import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { ExerciseFromDB } from "../../features/interfaces";
import CardExercises from "./CardExercises";
import userEvent from "@testing-library/user-event";

let mockDeleteExercise = { deleteExercise: jest.fn() };
jest.mock("../../hooks/useExercises", () => () => mockDeleteExercise);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Exercises Card component", () => {
  describe("When is instantiated with an exercise", () => {
    const testExercise: ExerciseFromDB = {
      body: "",
      name: "",
      description: "",
      image: "url",
      id: "",
    };
    test("It should show an image with the exercise", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardExercises
              name={testExercise.name}
              body={testExercise.body}
              image={testExercise.image}
              id=""
            ></CardExercises>
          </BrowserRouter>
        </Provider>
      );

      const cardImage = screen.getByRole("img", {
        name: testExercise.name,
      });

      expect((cardImage as HTMLImageElement).alt).toBe(testExercise.name);
      expect(cardImage).toBeInTheDocument();
    });
    describe("When click on delete button", () => {
      test("Then it should call the delete exercise function", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <CardExercises
                name={testExercise.name}
                body={testExercise.body}
                description={testExercise.description}
                image={testExercise.image}
                id=""
              />
            </BrowserRouter>
          </Provider>
        );

        const iconTrash = screen.getByTestId("icon-trash");

        await userEvent.click(iconTrash);

        expect(iconTrash).toBeInTheDocument();

        await expect(mockDeleteExercise.deleteExercise).toHaveBeenCalled();
      });
      describe("When it's called and clicked in the image", () => {
        test("Then it should call navigate with param '/detail:test'", async () => {
          render(
            <Provider store={store}>
              <BrowserRouter>
                <CardExercises
                  name={testExercise.name}
                  body={testExercise.body}
                  description={testExercise.description}
                  image={testExercise.image}
                  id=""
                />
              </BrowserRouter>
            </Provider>
          );

          const exercisePicture = screen.getByRole("img", { name: "" });

          await userEvent.click(exercisePicture);

          expect(exercisePicture).toBeInTheDocument();
          await expect(mockNavigate).toHaveBeenCalled();
        });
      });
    });
  });
});
