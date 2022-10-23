import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";

describe("Given an App component", () => {
  describe("When is instantiated", () => {
    test("It should render an image with name 'The Wod Builder Logo' in navigation bar", () => {
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

  describe("When is instantiated with create exercise", () => {
    test("It should show a button with name 'CREATE'", () => {
      const pathTest = "/create-exercise";
      render(
        <>
          <Provider store={store}>
            <MemoryRouter initialEntries={[pathTest]}>
              <App />
            </MemoryRouter>
          </Provider>
        </>
      );

      const button = screen.getByRole("button", { name: "CREATE" });

      expect(button).toBeInTheDocument();
    });
  });
});
