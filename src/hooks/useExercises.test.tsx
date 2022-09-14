import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";

import useExercises from "./useExercises";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useExercises hook", () => {
  describe("When its function createExercise is called", () => {
    test("It should send FormData passed as arguments to the DB", async () => {
      const mockExerciseFormData = new FormData();
      mockExerciseFormData.append("name", "name");
      mockExerciseFormData.append("description", "description");
      mockExerciseFormData.append("image", "image");
      mockExerciseFormData.append("body", "body");

      const exercise = mockExerciseFormData;
      const exerciseCreated = {
        body: "",
        name: "",
        description: "",
        image: "",
        id: "",
      };

      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(exercise),
      });
      const {
        result: {
          current: { createExercise },
        },
      } = renderHook(useExercises, { wrapper: Wrapper });
      await waitFor(() => {
        createExercise(exerciseCreated);
      });
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
