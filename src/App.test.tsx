import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";

describe("Given an App component", () => {
  describe("When is instantiated with a page not found", () => {
    test("It should render an image with the name 'Page Not Found 404'", () => {
      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </>
      );
    });
  });
});
