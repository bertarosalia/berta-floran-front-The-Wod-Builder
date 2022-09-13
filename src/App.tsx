import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Loading from "./components/Loading/Loading";
import Navigation from "./components/Navigation/Navigation";
import CardDetailPage from "./pages/CardDetailPage/CardDetailPage";
import CreateExerciseFormPage from "./pages/CreateExerciseFormPage.tsx/CreateExerciseFormPage";
import ListExercisesPage from "./pages/ListExercisesPage/ListExercisePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const { isLoadingShowing } = useAppSelector((state) => state.ui);
  return (
    <>
      {isLoadingShowing && <Loading />}

      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/exercises" />} />
        <Route path="/exercises" element={<ListExercisesPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/detail/:id" element={<CardDetailPage />} />

        <Route path="/create-exercise" element={<CreateExerciseFormPage />} />
      </Routes>
    </>
  );
}

export default App;
