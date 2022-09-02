import { render, screen } from "@testing-library/react";
import IExercise from "../../features/interfaces";
import CardExercises from "./CardExercises";

describe("Given a Exercises Card component", () => {
  describe("When is instantiated with an exercise", () => {
    const testExercise: IExercise = {
      body: "",
      name: "",
      description: "",
      image: "url",
    };
    test("It should show an image with the exercise", () => {
      render(
        <CardExercises
          name={testExercise.name}
          body={testExercise.body}
          description={testExercise.description}
          image={testExercise.image}
        ></CardExercises>
      );

      const cardImage = screen.getByRole("img", {
        name: testExercise.name,
      });

      expect((cardImage as HTMLImageElement).alt).toBe(testExercise.name);
      expect(cardImage).toBeInTheDocument();
    });
  });
});
