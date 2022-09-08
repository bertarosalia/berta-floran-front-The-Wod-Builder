import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CardDetail from "./CardDetail";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";

describe("Given a card exercise detail", () => {
  describe("When is called with an exercise id in params and store has that exercise", () => {
    test("It should show a card with an image inside", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardDetail />
          </BrowserRouter>
        </Provider>
      );

      const expectResult = screen.getByRole("img", { name: "" });

      expect(expectResult).toBeInTheDocument();
    });
  });
});
