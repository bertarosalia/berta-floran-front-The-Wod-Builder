import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import CreateExerciseFormPage from "./CreateExerciseFormPage";

describe("Given a Create Exercise Form Page", () => {
  describe("When it´s rendered", () => {
    test("It should show an h1 title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateExerciseFormPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedResult = screen.getByRole("heading", {
        name: "Let´s train!",
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
