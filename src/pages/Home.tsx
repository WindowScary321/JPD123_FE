import { useNavigate } from "react-router-dom";
import { BookOpen, Layers, HelpCircle, PenLine, Github, Terminal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { lessons } from "../data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white/40 backdrop-blur-sm pb-12"
    >
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight flex items-center justify-center gap-3">
            🌸 Ôn Thi FE JPD123 🌸
          </h1>
          <p className="mt-3 text-gray-600 text-lg font-medium">Chọn bài học để bắt đầu hành trình ôn tập</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* RENDER CÁC THẺ BÀI HỌC */}
          {lessons.map((lesson, idx) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 border-b border-gray-100 pb-4">
                <span className="text-2xl font-black text-rose-500 uppercase tracking-wider text-center block"> Bài {lesson.id} </span>
                <p className="text-sm text-gray-500 mt-2 text-center line-clamp-2 h-10">{lesson.description}</p>
              </div>
              <div className="text-xs font-bold text-gray-400 mb-5 text-center bg-gray-50 py-1.5 rounded-lg">
                {lesson.categories.reduce((s, c) => s + c.items.length, 0)} Từ vựng · {lesson.categories.length} Chủ đề
              </div>

              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">TỪ VỰNG</p>
              <div className="flex flex-col gap-2 mb-5">
                <button onClick={() => navigate(`/lesson/${lesson.id}/vocabulary`)}
                  className="flex items-center gap-2 w-full justify-center bg-rose-50 text-rose-600 font-bold px-4 py-2.5 rounded-xl hover:bg-rose-100 transition border border-rose-200">
                  <BookOpen size={16} strokeWidth={2.5} /> Danh sách
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/flashcard`)}
                  className="flex items-center gap-2 w-full justify-center bg-teal-50 text-teal-600 font-bold px-4 py-2.5 rounded-xl hover:bg-teal-100 transition border border-teal-200">
                  <Layers size={16} strokeWidth={2.5} /> Flashcard
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/quiz`)}
                  className="flex items-center gap-2 w-full justify-center bg-purple-500 text-white font-bold px-4 py-2.5 rounded-xl hover:bg-purple-600 transition shadow-md shadow-purple-200">
                  <HelpCircle size={16} strokeWidth={2.5} /> Kiểm tra
                </button>
              </div>

              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">CHỮ HÁN</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => navigate(`/lesson/${lesson.id}/kanji`)}
                  className="flex items-center gap-2 w-full justify-center bg-amber-50 text-amber-600 font-bold px-4 py-2.5 rounded-xl hover:bg-amber-100 transition border border-amber-200">
                  <PenLine size={16} strokeWidth={2.5} /> Danh sách
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/kanji-flashcard`)}
                  className="flex items-center gap-2 w-full justify-center bg-orange-50 text-orange-600 font-bold px-4 py-2.5 rounded-xl hover:bg-orange-100 transition border border-orange-200">
                  <Layers size={16} strokeWidth={2.5} /> Flashcard
                </button>
                <button onClick={() => navigate(`/lesson/${lesson.id}/kanji-quiz`)}
                  className="flex items-center gap-2 w-full justify-center bg-green-500 text-white font-bold px-4 py-2.5 rounded-xl hover:bg-green-600 transition shadow-md shadow-green-200">
                  <HelpCircle size={16} strokeWidth={2.5} /> Kiểm tra
                </button>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: lessons.length * 0.1 }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Hiệu ứng icon mờ ảo làm background */}
            <div className="absolute -bottom-6 -right-6 text-gray-700 opacity-50 transform group-hover:scale-110 transition-transform duration-500">
              <Terminal size={160} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-yellow-400" size={20} />
                <h2 className="text-2xl font-black text-white tracking-wide">Về Dự Án Này</h2>
              </div>
              <p className="text-gray-400 text-sm mb-6">Ôn thi FE cho Sinh Viên FBT</p>

              <p className="text-gray-300 leading-relaxed max-w-md mb-6">
                Ứng dụng được thiết kế chuyên biệt để tự học, ghi nhớ từ vựng và Kanji thông qua cơ chế <strong className="text-white">Active Recall</strong> (Flashcard) và <strong className="text-white">Spaced Repetition</strong> (Typing Quiz). wtf
              </p>
              <p className="text-[26px] font-bold text-gray-300 leading-relaxed max-w-md mb-6">
                TechStack
              </p>

              <div className="flex gap-3 flex-wrap mb-8">
                <span className="px-3 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-lg border border-blue-500/30">React</span>
                <span className="px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-bold rounded-lg border border-teal-500/30">Tailwind</span>
                <span className="px-3 py-1.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-lg border border-purple-500/30">Framer Motion</span>
                <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 text-xs font-bold rounded-lg border border-orange-500/30">Cloudflare Pages</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <a
                href="https://github.com/WindowScary321/JPD123_FE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Github size={20} />
                <span>Xem mã nguồn GitHub</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}