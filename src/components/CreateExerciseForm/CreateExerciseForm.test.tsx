import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import CreateExerciseForm from "./CreateExerciseForm";
import userEvent from "@testing-library/user-event";

beforeEach(() => jest.restoreAllMocks());
const mockCreate = jest.fn();
const mockGetAll = jest.fn();

jest.mock("../../hooks/useExercises/useExercises", () => () => ({
  createExercise: mockCreate,
  getAllExercises: mockGetAll,
}));

describe("Given a create exercise form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with four inputs and its labels", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateExerciseForm />
          </BrowserRouter>
        </Provider>
      );

      const elements = [
        screen.getByLabelText("Name"),
        screen.getByLabelText("Body"),
        screen.getByLabelText("Description"),
        screen.getByLabelText("Image"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    test("When user clicks it should call the useState", async () => {
      const useState = jest.spyOn(React, "useState");
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateExerciseForm />
          </BrowserRouter>
        </Provider>
      );

      screen.getByRole("button", { name: "CREATE" });

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });
  });

  describe("When user type in all required inputs", () => {
    test("Then it should be created a new exercise", async () => {
      const name = "snatch";
      const body = "arms";
      const description = "jjbbhbh";
      const image = "url";

      const textButton = "CREATE";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateExerciseForm />
          </BrowserRouter>
        </Provider>
      );

      const resultName = screen.getByLabelText("Name");
      const resultBody = screen.getByLabelText("Body");
      const resultDescription = screen.getByLabelText("Description");
      const resultImage = screen.getByLabelText("Image");
      const button = screen.getByRole("button", { name: textButton });

      await userEvent.type(resultName, name);
      await userEvent.type(resultBody, body);
      await userEvent.type(resultDescription, description);
      await userEvent.type(resultImage, image);
      await userEvent.click(button);

      expect(mockCreate).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalled();
    });
  });
});
