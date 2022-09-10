import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import CardDetailPage from "./CardDetailPage";

describe("Given a Card Detail Page", () => {
  describe("When it´s rendered", () => {
    test("It should show an h1 title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardDetailPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedResult = screen.getByRole("heading", { name: "" });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
