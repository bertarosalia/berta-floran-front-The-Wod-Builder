import { screen, render, renderHook, waitFor } from "@testing-library/react";
import ListExercises from "./ListExercises";
import Wrapper from "../../utils/Wrapper";
import useApi from "../../hooks/useApi";

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

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockedFetchValue,
}));

describe("Given a list exercises component", () => {
  describe("When is instantiated", () => {
    test("It should show a list of cards", async () => {
      const {
        result: {
          current: { getAllExercises },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await waitFor(() => {
        getAllExercises();
      });

      render(
        <>
          <Wrapper>
            <ListExercises />
          </Wrapper>
        </>
      );

      const exercisesList = screen.getByRole("list");
      console.log(exercisesList);
      expect(exercisesList).toBeInTheDocument();
    });
  });
});
