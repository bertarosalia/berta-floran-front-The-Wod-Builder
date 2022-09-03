import { renderHook, waitFor } from "@testing-library/react";
import { exercisesSlice } from "../features/store/exercisesSlice";
import Wrapper from "../utils/Wrapper";
import useApi from "./useApi";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useApi hook", () => {
  describe("When it´s invoked with his method getAllExercises", () => {
    test("It should dispatch the fetch response", async () => {
      const mockedFetchValue = {
        exercises: [
          {
            body: "",
            name: "",
            description: "",
            image: "",
          },
        ],
      };

      const {
        result: {
          current: { getAllExercises },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

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
});
