import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";

describe("Given an App component", () => {
  describe("When is instantiated", () => {
    test("It should render an image with name 'The Wod Builder Logo'", () => {
      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </>
      );

      const navLink = screen.getByRole("img", { name: "The Wod Builder Logo" });

      expect(navLink).toBeInTheDocument();
    });
  });
});
