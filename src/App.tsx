import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VocabularyPage from "./pages/VocabularyPage";
import FlashcardPage from "./pages/FlashcardPage";
import QuizPage from "./pages/QuizPage";
import KanjiPage from "./pages/KanjiPage";
import KanjiFlashcardPage from "./pages/KanjiFlashcardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/:id/vocabulary" element={<VocabularyPage />} />
      <Route path="/lesson/:id/flashcard" element={<FlashcardPage />} />
      <Route path="/lesson/:id/quiz" element={<QuizPage />} />
      <Route path="/lesson/:id/kanji" element={<KanjiPage />} />
      <Route path="/lesson/:id/kanji-flashcard" element={<KanjiFlashcardPage />} />
    </Routes>
  );
}
