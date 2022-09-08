import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import IExercise from "../../features/interfaces";
import CardExercises from "./CardExercises";
import userEvent from "@testing-library/user-event";

let mockDeleteExercise = { deleteExercise: jest.fn() };
jest.mock("../../hooks/useExercises", () => () => mockDeleteExercise);

describe("Given a Exercises Card component", () => {
  describe("When is instantiated with an exercise", () => {
    const testExercise: IExercise = {
      body: "",
      name: "",
      description: "",
      image: "url",
      id: "15",
    };
    test("It should show an image with the exercise", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardExercises
              name={testExercise.name}
              body={testExercise.body}
              image={testExercise.image}
              id={testExercise.id}
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
                key={testExercise.id}
                name={testExercise.name}
                body={testExercise.body}
                description={testExercise.description}
                image={testExercise.image}
                id={testExercise.id}
              />
            </BrowserRouter>
          </Provider>
        );

        const iconTrash = screen.getByTestId("icon-trash");

        await userEvent.click(iconTrash);

        expect(iconTrash).toBeInTheDocument();

        await expect(mockDeleteExercise.deleteExercise).toHaveBeenCalled();
      });
    });
  });
});
