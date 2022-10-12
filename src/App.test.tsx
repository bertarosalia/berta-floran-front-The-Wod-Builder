import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { UIState } from "./features/store/UI/model/UI";
import { UIReducer } from "./features/store/UI/UISlice";

const mockedFetchValue = [
  {
    exercises: [
      {
        body: "",
        name: "",
        description: "",
        image: "",
        id: "",
      },
    ],
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedFetchValue,
}));

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
    describe("When it's instantiated", () => {
      test("Then should call show loader reducer with property is loading showing to true", () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        );

        const previousUIPayload: UIState = {
          isLoadingShowing: false,
          message: "",
          type: true,
        };
        const UIPayload = {
          type: "ui/showLoader",
        };

        const expectedNewUI = {
          isLoadingShowing: true,
          message: "",
          type: true,
        };

        const newUI = UIReducer(previousUIPayload, UIPayload);

        expect(newUI).toStrictEqual(expectedNewUI);
      });
    });
  });
});
