import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Trophy, Star, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";
import { getKanjiLessonById } from "../data";

type QuizStep = "typeSelection" | "playing" | "results";
type QuizType = "kanji-to-hanviet" | "kanji-to-reading" | "kanji-to-meaning";

interface QuizQuestion {
  prompt: React.ReactNode;
  answers: string[]; 
  displayAnswer: string; 
  placeholder: string;
}

interface IncorrectAnswer {
  prompt: React.ReactNode;
  userAnswer: string;
  correctAnswer: string;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function KanjiQuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = getKanjiLessonById(Number(id));

  const [step, setStep] = useState<QuizStep>("typeSelection");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>([]);
  
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; correctAnswer: string } | null>(null);

  if (!lesson) return <div className="p-8 text-center">Không tìm thấy dữ liệu Kanji.</div>;

  const handleSelectType = (type: QuizType) => {
    let generatedQuestions: QuizQuestion[] = [];

    if (type === "kanji-to-hanviet") {
      lesson.kanji_list.forEach(k => {
        generatedQuestions.push({
          prompt: <span>Hán Việt của chữ <strong className="text-green-700 text-2xl">"{k.kanji}"</strong> là gì?</span>,
          answers: [k.han_viet.toLowerCase()],
          displayAnswer: k.han_viet,
          placeholder: "Nhập Hán Việt...",
        });
      });
    } else if (type === "kanji-to-reading") {
      lesson.kanji_list.flatMap(k => k.words).forEach(w => {
        // Data mẫu: "とうきょう (toukyou)" -> Tách riêng Hiragana và Romaji để chấm điểm
        const match = w.reading.match(/(.*?)\s*\((.*?)\)/);
        const validAnswers = match 
          ? [match[1].trim().toLowerCase(), match[2].trim().toLowerCase()] 
          : [w.reading.toLowerCase()];

        generatedQuestions.push({
          prompt: <span>Cách đọc Hiragana của từ <strong className="text-green-700 text-2xl">"{w.word}"</strong> là gì?</span>,
          answers: validAnswers,
          displayAnswer: w.reading,
          placeholder: "Nhập cách đọc Hiragana hoặc Romaji...",
        });
      });
    } else if (type === "kanji-to-meaning") {
      lesson.kanji_list.flatMap(k => k.words).forEach(w => {
        const possibleAnswers = w.meaning.split(/, |\//).map(s => s.trim().toLowerCase());
        generatedQuestions.push({
          prompt: <span>Nghĩa của từ <strong className="text-green-700 text-2xl">"{w.word}"</strong> là gì?</span>,
          answers: possibleAnswers,
          displayAnswer: w.meaning,
          placeholder: "Nhập nghĩa tiếng Việt...",
        });
      });
    }

    if (generatedQuestions.length === 0) {
      alert("Không có câu hỏi nào cho phần này!");
      return;
    }

    setQuestions(shuffle(generatedQuestions));
    setQIndex(0);
    setScore(0);
    setIncorrectAnswers([]);
    setInputValue("");
    setFeedback(null);
    setStep("playing");
  };

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || feedback !== null) return;

    const userAnswer = inputValue.trim().toLowerCase();
    const currentQ = questions[qIndex];
    const isCorrect = currentQ.answers.some(ans => ans === userAnswer);

    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setIncorrectAnswers(prev => [...prev, {
        prompt: currentQ.prompt,
        userAnswer: inputValue,
        correctAnswer: currentQ.displayAnswer
      }]);
    }

    setFeedback({ isCorrect, correctAnswer: currentQ.displayAnswer });
  };

  const handleNextQuestion = () => {
    if (qIndex + 1 >= questions.length) {
      setStep("results");
    } else {
      setQIndex(i => i + 1);
      setInputValue("");
      setFeedback(null);
    }
  };

  // --- VIEWS ---
  if (step === "typeSelection") {
    return (
      <Layout title={`Kiểm Tra Kanji - Bài ${lesson.lessonId}`} backTo="/">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center mt-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Kiểm Tra Kanji - Bài {lesson.lessonId}</h2>
          <p className="text-gray-500 mb-8">Chọn một hình thức để bắt đầu kiểm tra.</p>
          <div className="space-y-4">
            <button onClick={() => handleSelectType("kanji-to-hanviet")} className="w-full text-lg bg-green-500 text-white font-bold px-4 py-4 rounded-xl hover:bg-green-600 transition shadow-sm">
              Kanji → Hán Việt
            </button>
            <button onClick={() => handleSelectType("kanji-to-reading")} className="w-full text-lg bg-green-500 text-white font-bold px-4 py-4 rounded-xl hover:bg-green-600 transition shadow-sm">
              Từ Kanji → Gõ cách đọc Hiragana
            </button>
            <button onClick={() => handleSelectType("kanji-to-meaning")} className="w-full text-lg bg-green-500 text-white font-bold px-4 py-4 rounded-xl hover:bg-green-600 transition shadow-sm">
              Từ Kanji → Nghĩa tiếng Việt
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (step === "playing") {
    const currentQ = questions[qIndex];
    return (
      <Layout title={`Đang kiểm tra - Bài ${lesson.lessonId}`} backTo="/">
        <div className="max-w-xl mx-auto mt-6">
          <div className="flex justify-between items-center mb-4 text-sm font-bold uppercase tracking-wider">
            <span className="text-gray-700 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
              Câu {qIndex + 1} / {questions.length}
            </span>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
              <span className="text-green-600">✅ {score} Đúng</span>
              <span className="text-gray-400">|</span>
              <span className="text-rose-500">❌ {incorrectAnswers.length} Sai</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${(qIndex / questions.length) * 100}%` }}></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xl text-center text-gray-800 mb-8">{currentQ.prompt}</p>
            
            <form onSubmit={handleSubmitAnswer}>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={feedback !== null}
                placeholder={currentQ.placeholder}
                autoFocus
                autoComplete="off" spellCheck="false"
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition disabled:bg-gray-50 disabled:text-gray-500"
              />

              <div className="mt-6 min-h-[4rem]">
                {feedback && (
                  <div className={`p-4 rounded-xl border ${feedback.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    {feedback.isCorrect ? (
                      <p className="text-green-700 font-bold flex items-center gap-2">🎉 Chính xác!</p>
                    ) : (
                      <div>
                        <p className="text-red-600 font-bold mb-1">❌ Không chính xác.</p>
                        <p className="text-gray-700">Đáp án đúng: <span className="font-bold text-green-700">{feedback.correctAnswer}</span></p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6">
                {!feedback ? (
                  <button type="submit" disabled={!inputValue.trim()} className="w-full bg-green-500 text-white font-bold py-4 px-4 rounded-xl hover:bg-green-600 transition disabled:opacity-50">
                    Kiểm Tra
                  </button>
                ) : (
                  <button type="button" onClick={handleNextQuestion} autoFocus className="w-full bg-teal-500 text-white font-bold py-4 px-4 rounded-xl hover:bg-teal-600 transition">
                    {qIndex + 1 >= questions.length ? "Xem kết quả" : "Câu Tiếp Theo →"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  if (step === "results") {
    const pct = Math.round((score / questions.length) * 100);
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;

    return (
      <Layout title="Kết quả" backTo="/">
        <div className="max-w-2xl mx-auto mt-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center mb-8">
            <Trophy size={64} className="mx-auto text-green-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
            <p className="text-gray-500 mb-4">Bạn đã trả lời đúng <span className="font-bold text-green-600">{score}/{questions.length}</span> câu.</p>
            <p className="text-6xl font-black text-teal-600 mb-6">{pct}%</p>
            
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map((star) => (
                <Star key={star} size={48} className={star <= stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-100 text-gray-200"} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setStep("typeSelection")} className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition">
                Làm lại bài này
              </button>
              <button onClick={() => navigate("/")} className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">
                Về trang chủ
              </button>
            </div>
          </div>

          {incorrectAnswers.length > 0 && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Xem lại các câu sai:</h3>
              <div className="space-y-4">
                {incorrectAnswers.map((item, idx) => (
                  <div key={idx} className="bg-red-50 p-4 rounded-xl border border-red-100 text-left">
                    <p className="text-gray-800 mb-2 font-medium">Q: {item.prompt}</p>
                    <p className="text-red-600 text-sm mb-1">❌ Bạn gõ: <span className="font-semibold">{item.userAnswer}</span></p>
                    <p className="text-green-700 text-sm">✅ Đáp án: <span className="font-bold">{item.correctAnswer}</span></p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  return null;
}