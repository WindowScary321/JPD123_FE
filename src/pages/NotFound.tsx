import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="min-h-screen flex items-center justify-center p-4 bg-white/40 backdrop-blur-sm"
        >
            <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-5 bg-rose-50 rounded-full text-rose-500 shadow-inner">
                        <SearchX size={64} strokeWidth={1.5} />
                    </div>
                </div>

                <h1 className="text-8xl font-black text-gray-200 mb-2">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Ối! Không tìm thấy trang
                </h2>

                <p className="text-gray-500 mb-8 leading-relaxed">
                    Có vẻ như đường dẫn này không tồn tại hoặc đã bị di chuyển.
                    <br />
                    <span className="text-sm italic text-rose-400">
                        (ページが見つかりません)
                    </span>
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center gap-2 bg-rose-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-rose-600 transition-all shadow-lg shadow-rose-200 active:scale-95"
                >
                    <Home size={20} />
                    Về trang chủ
                </button>
            </div>
        </motion.div>
    );
}