import AppStyled from "./AppStyled";
import CardExercises from "./components/CardExercises/CardExercises";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled>
        <CardExercises />
      </AppStyled>
    </>
  );
};

export default App;
