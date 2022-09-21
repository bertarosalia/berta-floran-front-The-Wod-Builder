import exercisesReducer, {
  createExerciseActionCreator,
  deleteExerciseActionCreator,
  loadAllExercisesactionCreator,
} from "./exercisesSlice";
import { ExerciseFromDB } from "./model/exercises";

describe("Given an exercises reducer function", () => {
  const inititialStateExercises: ExerciseFromDB[] = [];

  describe("When is called with an unknown action and the wrong state", () => {
    test("Then it should return the initial state", () => {
      const wrongState = undefined;
      const unknownAction = { type: "" };

      const exercisesReducerReturn = exercisesReducer(
        wrongState,
        unknownAction
      );

      expect(exercisesReducerReturn).toEqual(inititialStateExercises);
    });
    describe("When is called with a loadAllExercises action and a new exercise state", () => {
      test("Then it should return the new state with the exercises", () => {
        const newExercises: ExerciseFromDB[] = [
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
  describe("When is call with a deleteExercise reducer action", () => {
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
    describe("When it´s called with the create exercise reducer action", () => {
      test("Then it should return an action with a type 'IExercise/createExercise` and an exercise as payload", () => {
        const inititialStateExercises: ExerciseFromDB[] = [];

        const exerciseFake: ExerciseFromDB = {
          id: "1",
          body: "legs",
          name: "squat",
          description: "",
          image: "http://",
        };

        const expectedResult = [exerciseFake];

        const actionFake = createExerciseActionCreator(exerciseFake);

        const result = exercisesReducer(inititialStateExercises, actionFake);

        expect(result).toStrictEqual(expectedResult);
      });
    });
  });
});
