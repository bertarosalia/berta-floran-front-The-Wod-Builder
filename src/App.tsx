import { useEffect } from "react";
import AppStyled from "./AppStyled";
import useApi from "./hooks/useApi";

const App = (): JSX.Element => {
  const { getAllExercises } = useApi();

  useEffect(() => {
    getAllExercises();
  });

  return (
    <>
      <AppStyled></AppStyled>
    </>
  );
};

export default App;
