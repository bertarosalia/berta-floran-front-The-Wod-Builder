import { render, renderHook, screen, waitFor } from "@testing-library/react";
import useExercises from "../../hooks/useExercises/useExercises";
import Wrapper from "../../utils/Wrapper";
import ListExercises from "./ListExercises";

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

describe("Given a exercises list component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", async () => {
      const {
        result: {
          current: { getAllExercises },
        },
      } = renderHook(useExercises, { wrapper: Wrapper });

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

      const exercisesList = screen.getByRole("heading");
      expect(exercisesList).toBeInTheDocument();
    });
  });
});
