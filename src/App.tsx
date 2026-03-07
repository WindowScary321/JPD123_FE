import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Thêm thư viện này
import Home from "./pages/Home";
import VocabularyPage from "./pages/VocabularyPage";
import FlashcardPage from "./pages/FlashcardPage";
import QuizPage from "./pages/QuizPage";
import KanjiPage from "./pages/KanjiPage";
import KanjiFlashcardPage from "./pages/KanjiFlashcardPage";

export default function App() {
  const location = useLocation(); // Lấy URL hiện tại

  return (
    // mode="wait" giúp trang cũ mờ đi hẳn rồi trang mới mới hiện ra
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id/vocabulary" element={<VocabularyPage />} />
        <Route path="/lesson/:id/flashcard" element={<FlashcardPage />} />
        <Route path="/lesson/:id/quiz" element={<QuizPage />} />
        <Route path="/lesson/:id/kanji" element={<KanjiPage />} />
        <Route path="/lesson/:id/kanji-flashcard" element={<KanjiFlashcardPage />} />
      </Routes>
    </AnimatePresence>
  );
}