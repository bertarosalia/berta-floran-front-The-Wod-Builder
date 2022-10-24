import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import toast from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "../../features/store/exercises/exercisesSlice";
import { store } from "../../app/store";
import { showLoaderActionCreator } from "../../features/store/UI/UISlice";
import useExercises from "./useExercises";
import { ExerciseFromDB } from "../../features/store/exercises/model/exercises";

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

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useExercises hook", () => {
  const mockExerciseFormData = new FormData();
  mockExerciseFormData.append("name", "name");
  mockExerciseFormData.append("description", "description");
  mockExerciseFormData.append("image", "image");
  mockExerciseFormData.append("body", "body");
  mockExerciseFormData.append("id", "id");

  const exerciseTest = {
    body: "arms",
    name: "push press",
    description: "very great exercise",
    image: "url",
    id: "6321a224a3fa8622ce45e644",
  };

  const mockId = "6321a224a3fa8622ce45e644";

  const mockWrongId = "12345";

  describe("When its function createExercise is called", () => {
    describe("And data is correct", () => {
      test("It should call the success modal", async () => {
        const {
          result: {
            current: { createExercise },
          },
        } = renderHook(useExercises, { wrapper: Wrapper });

        await createExercise(exerciseTest);

        await expect(toast.success).toHaveBeenCalledWith(
          "Nothing to worry about! Exercise has been created successfully!",
          {
            position: "top-center",
            duration: 5000,
          }
        );
      });
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
  });
  test("Then dispatch must be called with action loadExercises", async () => {
    const mockExercises: ExerciseFromDB[] = [
      {
        name: "snatch",
        body: "arms",
        description: "great exercise",
        image: "url",
        id: "1234",
      },
      {
        name: "lungees",
        body: "legs",
        description: "legs die",
        image: "url",
        id: "1235",
      },
    ];

    const {
      result: {
        current: { getAllExercises },
      },
    } = renderHook(useExercises);

    await act(async () => {
      getAllExercises();
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        loadAllExercisesactionCreator(mockExercises)
      );
    });
  });

  describe("When delete exercise is called", () => {
    describe("When it´s invoked with an invalid exercise id", () => {
      test("Then it should not dispatch the delete action", async () => {
        const {
          result: {
            current: { deleteExercise },
          },
        } = renderHook(useExercises);

        await act(async () => {
          await deleteExercise(mockWrongId);
        });

        await waitFor(() => {
          expect(mockDispatch).not.toHaveBeenCalledWith(
            deleteExerciseActionCreator(mockWrongId)
          );
        });
      });
    });

    test("It should call the error modal", async () => {
      const {
        result: {
          current: { deleteExercise },
        },
      } = renderHook(useExercises, { wrapper: Wrapper });

      await deleteExercise(mockWrongId);

      await expect(toast.error).toHaveBeenCalledWith(
        "Uh, no! You need to take action! Something went wrong!",
        {
          position: "top-center",
          duration: 5000,
        }
      );
    });

    describe("And fetch is done with exist id game", () => {
      test("Then dispatch must be called with delete action with id mockId", async () => {
        const { result } = renderHook(() => useExercises(), {
          wrapper: Wrapper,
        });
        await result.current.deleteExercise(mockId);

        expect(mockDispatch).toHaveBeenCalledWith(
          deleteExerciseActionCreator(mockId)
        );
      });
    });
  });
});
