import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import ListExercisesPage from "./ListExercisePage";

describe("Given a list exercises page", () => {
  describe("When it´s rendered", () => {
    test("It should show a button with 'Exercises' inside", () => {
      const expectedText = "Exercises";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ListExercisesPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedResult = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
