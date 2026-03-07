import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion"; // Import motion

interface LayoutProps {
  children: ReactNode;
  title?: string;
  backTo?: string;
}

export default function Layout({ children, title, backTo = "/" }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      // Hiệu ứng chuyển trang
      initial={{ opacity: 0, y: 20 }}    // Bắt đầu: Mờ và nằm dưới 20px
      animate={{ opacity: 1, y: 0 }}     // Hiện hình: Rõ và về vị trí cũ
      exit={{ opacity: 0, y: -20 }}      // Thoát: Mờ và trượt nhẹ lên trên
      transition={{ duration: 0.3, ease: "easeInOut" }} // Thời gian chạy
      
      // Giữ nguyên các class kính mờ (glassmorphism) bạn đã chỉnh
      className="min-h-screen bg-white/40 backdrop-blur-sm border-b border-white/20"
    >
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(backTo)}
            className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Quay lại</span>
          </button>
          {title && (
            <h1 className="text-2xl font-bold text-gray-800 ml-2">{title}</h1>
          )}
        </div>
        
        {/* Nội dung trang */}
        <main>{children}</main>
      </div>
    </motion.div>
  );
}