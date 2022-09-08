import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CardDetail from "./CardDetail";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
  describe("When it's called and clicked in the 'X' button", () => {
    test("Then it should call navigate with param '/exercises'", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardDetail />
          </BrowserRouter>
        </Provider>
      );

      const detailButton = screen.getByRole("button", { name: "X" });

      await userEvent.click(detailButton);

      expect(detailButton).toBeInTheDocument();
      await expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
