import AppStyled from "./AppStyled";
import ListExercises from "./components/ListExercises/ListExercises";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled>
        <ListExercises />
      </AppStyled>
    </>
  );
};

export default App;
