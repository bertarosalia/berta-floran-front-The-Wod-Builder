import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { deleteExerciseActionCreator } from "../features/store/exercisesSlice";

import Wrapper from "../utils/Wrapper";
import useExercises from "./useExercises";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useExercises hook", () => {
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

    describe("When it´s invoked with an invalid exercise id", () => {
      test("Then it should not dispatch the delete action", async () => {
        const idExercise = "kknknk";
        await act(async () => {
          await deleteExerciseActionCreator("wrongId");
        });

        await waitFor(() => {
          expect(mockDispatch).not.toHaveBeenCalledWith(
            deleteExerciseActionCreator(idExercise)
          );
        });
      });
    });
  });
});
