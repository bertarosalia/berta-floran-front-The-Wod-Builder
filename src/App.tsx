import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Navigation from "./components/Navigation/Navigation";
import CardDetailPage from "./pages/CardDetailPage/CardDetailPage";
import CreateExerciseFormPage from "./pages/CreateExerciseFormPage.tsx/CreateExerciseFormPage";
import ListExercisesPage from "./pages/ListExercisesPage/ListExercisePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Toaster } from "react-hot-toast";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";

function App() {
  const { isLoadingShowing } = useAppSelector((state) => state.ui);
  return (
    <div className="container">
      {isLoadingShowing && <Loading />}
      <Toaster position="bottom-center" />

      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/exercises" />} />
          <Route path="/exercises" element={<ListExercisesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/detail/:id" element={<CardDetailPage />} />
          <Route path="/create-exercise" element={<CreateExerciseFormPage />} />
          <Route path="/sign-up" element={<RegisterFormPage />} />
          <Route path="/login" element={<LoginFormPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
