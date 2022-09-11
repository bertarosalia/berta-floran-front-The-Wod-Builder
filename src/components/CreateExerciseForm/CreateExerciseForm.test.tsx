import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import CreateExerciseForm from "./CreateExerciseForm";

beforeEach(() => jest.restoreAllMocks());

const mockUseExercises = {
  createExercise: jest.fn(),
};
jest.mock("../../hooks/useExercises", () => () => mockUseExercises);

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
});
