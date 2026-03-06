import { useParams } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import Layout from "../components/Layout";
import { getLessonById } from "../data";
import type { VocabItem } from "../types/lesson";

type QuizState = "playing" | "answered" | "finished";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuestions(items: VocabItem[]) {
  const shuffled = shuffle(items);
  return shuffled.map((item) => {
    const wrongs = shuffle(items.filter((x) => x.meaning !== item.meaning)).slice(0, 3);
    const choices = shuffle([item, ...wrongs]);
    return { item, choices };
  });
}

export default function QuizPage() {
  const { id } = useParams();
  const lesson = getLessonById(Number(id));

  const allItems = useMemo(
    () => lesson?.categories.flatMap((c) => c.items) ?? [],
    [lesson]
  );

  const [questions] = useState(() => buildQuestions(allItems));
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [state, setState] = useState<QuizState>("playing");

  const current = questions[qIndex];

  const handleAnswer = useCallback((meaning: string) => {
    if (state !== "playing") return;
    setSelected(meaning);
    if (meaning === current.item.meaning) setScore((s) => s + 1);
    setState("answered");
  }, [state, current]);

  const next = () => {
    if (qIndex + 1 >= questions.length) {
      setState("finished");
    } else {
      setQIndex((i) => i + 1);
      setSelected(null);
      setState("playing");
    }
  };

  const restart = () => {
    window.location.reload();
  };

  if (!lesson) return <div className="p-8 text-center">Không tìm thấy bài học.</div>;

  if (state === "finished") {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Layout title="Kết quả" backTo="/">
        <div className="max-w-md mx-auto text-center py-10">
          <Trophy size={64} className="mx-auto text-yellow-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
          <p className="text-gray-500 mb-6">
            Bạn đúng <span className="font-bold text-rose-500">{score}/{questions.length}</span> câu ({pct}%)
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
            <div
              className="bg-rose-400 h-4 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-2xl mb-6">
            {pct >= 80 ? "🎉 Xuất sắc!" : pct >= 60 ? "👍 Khá tốt!" : "📚 Cần ôn thêm!"}
          </p>
          <button
            onClick={restart}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition"
          >
            <RotateCcw size={18} /> Làm lại
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`Kiểm tra — Bài ${lesson.id}`} backTo="/">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Câu {qIndex + 1} / {questions.length}</span>
          <span>✅ {score} đúng</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-rose-400 h-2 rounded-full transition-all"
            style={{ width: `${((qIndex) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center mb-6">
        <p className="text-sm text-gray-400 mb-3">Nghĩa của từ này là gì?</p>
        <div className="text-5xl font-bold text-gray-800 mb-2">{current.item.kanji}</div>
        <div className="text-gray-400 text-lg">{current.item.hiragana}</div>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {current.choices.map((choice, i) => {
          const isCorrect = choice.meaning === current.item.meaning;
          const isSelected = choice.meaning === selected;

          let btnClass = "w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition text-gray-700 ";
          if (state === "answered") {
            if (isCorrect) btnClass += "bg-green-50 border-green-400 text-green-700";
            else if (isSelected) btnClass += "bg-red-50 border-red-400 text-red-600";
            else btnClass += "bg-white border-gray-200 opacity-50";
          } else {
            btnClass += "bg-white border-gray-200 hover:border-rose-300 hover:bg-rose-50 cursor-pointer";
          }

          return (
            <button key={i} className={btnClass} onClick={() => handleAnswer(choice.meaning)}>
              <span className="flex items-center gap-2">
                {state === "answered" && isCorrect && <CheckCircle2 size={18} className="text-green-500 shrink-0" />}
                {state === "answered" && isSelected && !isCorrect && <XCircle size={18} className="text-red-500 shrink-0" />}
                {choice.meaning}
              </span>
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {state === "answered" && (
        <div className="text-center">
          <button
            onClick={next}
            className="px-8 py-3 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition"
          >
            {qIndex + 1 >= questions.length ? "Xem kết quả →" : "Câu tiếp theo →"}
          </button>
        </div>
      )}
    </Layout>
  );
}
