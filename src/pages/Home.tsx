import { useNavigate } from "react-router-dom";
import { BookOpen, Layers, HelpCircle, PenLine } from "lucide-react";
import { lessons } from "../data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fff8f9]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">🌸 Ôn Thi FE JPD123 🌸</h1>
          <p className="mt-2 text-gray-500 text-lg">Chọn bài học để bắt đầu ôn tập</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div key={lesson.id}
              className="bg-white rounded-2xl shadow-md border border-rose-100 p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="text-2xl font-bold text-rose-400 uppercase tracking-wide text-center block"> Bài {lesson.id} </span>
                <p className="text-sm text-gray-500 mt-1">{lesson.description}</p>
              </div>
              <div className="text-sm text-gray-400 mb-5">
                {lesson.categories.reduce((s, c) => s + c.items.length, 0)} từ vựng · {lesson.categories.length} chủ đề
              </div>

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Từ vựng</p>
              <div className="flex flex-col gap-2 mb-4">
                <button onClick={() => navigate(`/lesson/${lesson.id}/vocabulary`)}
                  className="flex items-center gap-2 w-full justify-center bg-rose-50 text-rose-600 font-semibold px-4 py-2 rounded-xl hover:bg-rose-100 transition border border-rose-200">
                  <BookOpen size={17} /> Danh sách
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/flashcard`)}
                  className="flex items-center gap-2 w-full justify-center bg-teal-50 text-teal-600 font-semibold px-4 py-2 rounded-xl hover:bg-teal-100 transition border border-teal-200">
                  <Layers size={17} /> Flashcard
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/quiz`)}
                  className="flex items-center gap-2 w-full justify-center bg-purple-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-purple-600 transition">
                  <HelpCircle size={17} /> Kiểm tra
                </button>
              </div>

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Chữ Hán</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => navigate(`/lesson/${lesson.id}/kanji`)}
                  className="flex items-center gap-2 w-full justify-center bg-amber-50 text-amber-600 font-semibold px-4 py-2 rounded-xl hover:bg-amber-100 transition border border-amber-200">
                  <PenLine size={17} /> Danh sách Kanji
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/kanji-flashcard`)}
                  className="flex items-center gap-2 w-full justify-center bg-orange-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-orange-600 transition">
                  <Layers size={17} /> Flashcard Kanji
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
