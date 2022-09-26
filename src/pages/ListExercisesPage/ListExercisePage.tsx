import ListExercises from "../../components/ListExercises/ListExercises";
import ListExercisePageStyled from "./ListExercisePageStyle";

const ListExercisesPage = (): JSX.Element => {
  return (
    <>
      <ListExercisePageStyled>
        <div className="exercises-list__title--container">
          <h1 className="exercises-list__title">Exercises</h1>
        </div>
        <ListExercises />
      </ListExercisePageStyled>
    </>
  );
};
export default ListExercisesPage;
