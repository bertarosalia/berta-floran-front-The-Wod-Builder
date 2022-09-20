import { render, renderHook, screen, waitFor } from "@testing-library/react";
import CardDetailPage from "./CardDetailPage";
import useExercises from "../../hooks/useExercises";
import Wrapper from "../../utils/Wrapper";

const exerciseDetail = {
  name: "snatch",
  image: "snatchUrl",
  body: "arms",
  description: "best exercise",
};

const mockgetExerciseById = jest.fn().mockResolvedValue(exerciseDetail);

jest.mock("../../hooks/useExercises", () => () => ({
  getOneExerciseById: mockgetExerciseById,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ idExercise: "125" }),
}));

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

describe("Given the CardDetailPage", () => {
  describe("When it's instantiated", () => {
    test("Then should show exercise name in a heading", async () => {
      const paramPath = "125";

      const {
        result: {
          current: { getOneExerciseById },
        },
      } = renderHook(useExercises, { wrapper: Wrapper });

      await waitFor(() => {
        getOneExerciseById(paramPath);
      });
      render(
        <>
          <Wrapper>
            <CardDetailPage />
          </Wrapper>
        </>
      );

      const CardDetail = screen.getByRole("heading");
      expect(CardDetail).toBeInTheDocument();
    });
  });
});
