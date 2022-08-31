import exercisesReducer, { loadAllExercises } from "./exercisesSlice";
import IExercise from "../interfaces";

describe("Given an exercises slice function", () => {
  const inititialStateExercises: IExercise[] = [];

  describe("When is instantiated with an unknown action and the wrong state", () => {
    test("Then it should return the initial state", () => {
      const wrongState = undefined;
      const unknownAction = { type: "" };

      const returnExercises = exercisesReducer(wrongState, unknownAction);

      expect(returnExercises).toEqual(inititialStateExercises);
    });
    describe("When instatiated with a loadAllExercises action and a new exercise state", () => {
      test("Then it should return the new state with the exercises", () => {
        const newExercises: IExercise[] = [
          { body: "", name: "", description: "", image: "" },
        ];

        const returnFromReducer = exercisesReducer(
          inititialStateExercises,
          loadAllExercises(newExercises)
        );

        expect(returnFromReducer).toEqual(newExercises);
      });
    });
  });
});
