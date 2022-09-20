import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import RegisterFormPage from "./RegisterFormPage";

describe("Given the RegisterFormPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Join us !' in heading", () => {
      const headingText = "Join us !";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterFormPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
