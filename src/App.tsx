import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import VocabularyPage from "./pages/VocabularyPage";
import FlashcardPage from "./pages/FlashcardPage";
import QuizPage from "./pages/QuizPage";
import KanjiPage from "./pages/KanjiPage";
import KanjiFlashcardPage from "./pages/KanjiFlashcardPage";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id/vocabulary" element={<VocabularyPage />} />
        <Route path="/lesson/:id/flashcard" element={<FlashcardPage />} />
        <Route path="/lesson/:id/quiz" element={<QuizPage />} />
        <Route path="/lesson/:id/kanji" element={<KanjiPage />} />
        <Route path="/lesson/:id/kanji-flashcard" element={<KanjiFlashcardPage />} />

        {/* Route 404 phải nằm ở cuối cùng */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}