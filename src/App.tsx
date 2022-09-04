import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ListExercisesPage from "./pages/ListExercisesPage.tsx/ListExercisePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="/" element={<ListExercisesPage />} />
        <Route path="/exercises" element={<ListExercisesPage />} />
      </Routes>
    </>
  );
}

export default App;
