import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import toast from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "../../features/store/exercises/exercisesSlice";
import { store } from "../../features/store/store";
import { showLoaderActionCreator } from "../../features/store/UI/UISlice";
import useExercises from "../useExercises/useExercises";

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

jest.mock("react-hot-toast");

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

beforeEach(() => jest.clearAllMocks());

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
    id: "125",
  };

  global.fetch = jest.fn().mockReturnValue({
    json: jest.fn().mockReturnValue(exercise),
  });

  const mockId = "125";

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
          expect(mockDispatch).toHaveBeenCalled();
        });
      });
      test("Then it should send a loading modal", async () => {
        const {
          result: {
            current: { getAllExercises },
          },
        } = renderHook(useExercises, { wrapper: Wrapper });

        await act(async () => {
          await getAllExercises();
        });

        await waitFor(() => {
          expect(mockDispatch).toHaveBeenCalledWith(showLoaderActionCreator());
        });
      });

      describe("When it´s invoked with an invalid exercise id", () => {
        test("Then it should not dispatch the delete action", async () => {
          const {
            result: {
              current: { deleteExercise },
            },
          } = renderHook(useExercises);

          await act(async () => {
            await deleteExercise("wrongId");
          });
          await waitFor(() => {
            expect(mockDispatch).not.toHaveBeenCalledWith(
              deleteExerciseActionCreator(mockId)
            );
          });
        });
      });
      test("And if it receive an error it should call the error modal", async () => {
        const {
          result: {
            current: { deleteExercise },
          },
        } = renderHook(useExercises, { wrapper: Wrapper });

        await deleteExercise("123");

        await expect(toast.error).toHaveBeenCalledWith(
          "Uh, no! You need to take action! Something went wrong!",
          {
            position: "top-center",
            duration: 5000,
          }
        );
      });
      describe("When it's invoked with getOneExerciseById", () => {
        test("And if the id is not correct it should call the error modal", async () => {
          const {
            result: {
              current: { getOneExerciseById },
            },
          } = renderHook(useExercises, { wrapper: Wrapper });

          await getOneExerciseById("123");

          await expect(toast.error).toHaveBeenCalledWith(
            "Ups! Cannot show details from this exercise now. Try again",
            {
              position: "top-center",
              duration: 5000,
            }
          );
        });
      });
    });
  });
});
