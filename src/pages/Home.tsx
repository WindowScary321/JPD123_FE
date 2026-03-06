import { useNavigate } from "react-router-dom";
import { BookOpen, Layers, HelpCircle } from "lucide-react";
import { lessons } from "../data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fff8f9]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">🌸 Học Tiếng Nhật</h1>
          <p className="mt-2 text-gray-500 text-lg">Chọn bài học để bắt đầu ôn tập</p>
        </div>

        {/* Lesson Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-2xl shadow-md border border-rose-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wide">
                  Bài {lesson.id}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mt-1">{lesson.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{lesson.description}</p>
              </div>

              <div className="text-sm text-gray-400 mb-5">
                {lesson.categories.reduce((sum, c) => sum + c.items.length, 0)} từ vựng
                · {lesson.categories.length} chủ đề
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/lesson/${lesson.id}/vocabulary`)}
                  className="flex items-center gap-2 w-full justify-center bg-rose-50 text-rose-600 font-semibold px-4 py-2 rounded-xl hover:bg-rose-100 transition border border-rose-200"
                >
                  <BookOpen size={18} /> Danh sách từ vựng
                </button>
                <button
                  onClick={() => navigate(`/lesson/${lesson.id}/flashcard`)}
                  className="flex items-center gap-2 w-full justify-center bg-teal-50 text-teal-600 font-semibold px-4 py-2 rounded-xl hover:bg-teal-100 transition border border-teal-200"
                >
                  <Layers size={18} /> Flashcard
                </button>
                <button
                  onClick={() => navigate(`/lesson/${lesson.id}/quiz`)}
                  className="flex items-center gap-2 w-full justify-center bg-purple-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-purple-600 transition"
                >
                  <HelpCircle size={18} /> Kiểm tra
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
