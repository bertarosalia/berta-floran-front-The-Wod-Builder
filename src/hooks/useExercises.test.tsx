import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import exercisesReducer, {
  deleteExerciseActionCreator,
  exercisesSlice,
} from "../features/store/exercisesSlice";
import Wrapper from "../utils/Wrapper";
import useExercises from "./useExercises";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useExercises hook", () => {
  describe("When it´s invoked with his method getAllExercises", () => {
    test("It should dispatch the fetch response", async () => {
      const mockedFetchValue = {
        exercises: [
          {
            body: "",
            name: "",
            description: "",
            image: "",
            id: "",
          },
        ],
      };

      const {
        result: {
          current: { getAllExercises },
        },
      } = renderHook(useExercises, { wrapper: Wrapper });

      global.fetch = jest.fn().mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockedFetchValue),
      });

      await waitFor(() => {
        getAllExercises();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          exercisesSlice.actions.loadAllExercises(mockedFetchValue.exercises)
        );
      });
    });
  });
  describe("When it´s invoked with a delete exercise method with a valid id", () => {
    const {
      result: {
        current: { deleteExercise },
      },
    } = renderHook(useExercises);

    const idExercise: string = "5156156151515";

    test("Then it should call the dispatch with the delete exercise action creator with the id", async () => {
      await act(async () => {
        await deleteExercise(idExercise);
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          deleteExerciseActionCreator(idExercise)
        );
      });
    });
    describe("When it´s invoked with an invalid exercise id", () => {
      test("Then it should not dispatch the delete action", async () => {
        await act(async () => {
          await deleteExercise("wrongId");
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
