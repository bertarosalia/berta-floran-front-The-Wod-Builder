import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import CardDetailPage from "./pages/CardDetailPage/CardDetailPage";
import ListExercisesPage from "./pages/ListExercisesPage/ListExercisePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/exercises" />} />
        <Route path="/exercises" element={<ListExercisesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/detail:id" element={<CardDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
