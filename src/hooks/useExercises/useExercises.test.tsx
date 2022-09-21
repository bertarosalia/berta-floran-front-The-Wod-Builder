import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useExercises from "../useExercises/useExercises";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

jest.mock("react-hot-toast");
const mockUseDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a useExercises hook", () => {
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

  describe("When its function createExercise is called", () => {
    test("It should send FormData passed as arguments to the DB", async () => {
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
    describe("When it's invoked with getAllExercises method", () => {
      test("Then it should dispatch all exercises received", async () => {
        const {
          result: {
            current: { getAllExercises },
          },
        } = renderHook(useExercises, { wrapper: Wrapper });

        await act(async () => {
          await getAllExercises();
        });

        await waitFor(() => {
          expect(mockUseDispatch).toHaveBeenCalled();
        });
      });
    });
  });
});
