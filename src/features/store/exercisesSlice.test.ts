import exercisesReducer, {
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "./exercisesSlice";
import IExercise from "../interfaces";

describe("Given an exercises reducer function", () => {
  const inititialStateExercises: IExercise[] = [];

  describe("When is instantiated with an unknown action and the wrong state", () => {
    test("Then it should return the initial state", () => {
      const wrongState = undefined;
      const unknownAction = { type: "" };

      const exercisesReducerReturn = exercisesReducer(
        wrongState,
        unknownAction
      );

      expect(exercisesReducerReturn).toEqual(inititialStateExercises);
    });
    describe("When instatiated with a loadAllExercises action and a new exercise state", () => {
      test("Then it should return the new state with the exercises", () => {
        const newExercises: IExercise[] = [
          { body: "", name: "", description: "", image: "", id: "" },
        ];

        const returnFromReducer = exercisesReducer(
          inititialStateExercises,
          loadAllExercisesactionCreator(newExercises)
        );

        expect(returnFromReducer).toEqual(newExercises);
      });
    });
  });
  describe("When call with a deleteExercise reducer as argument", () => {
    test("Then it should return a list of exercises without the exercise payload", () => {
      const exercisesBefore = [
        {
          id: "1",
          body: "legs",
          name: "squat",
          description: "",
          image: "http://",
        },
        {
          id: "2",
          body: "ABS",
          name: "push ups",
          description: "",
          image: "http://",
        },
      ];

      const exerciseAfterDeleted = [
        {
          id: "2",
          body: "ABS",
          name: "push ups",
          description: "",
          image: "http://",
        },
      ];

      const exerciseDeleted = {
        id: "1",
        body: "legs",
        name: "squat",
        description: "",
        image: "http://",
      };

      const action = deleteExerciseActionCreator(exerciseDeleted.id);
      const result = exercisesReducer(exercisesBefore, action);

      expect(result).toStrictEqual(exerciseAfterDeleted);
    });
  });
});
