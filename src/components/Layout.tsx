import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  backTo?: string;
}

export default function Layout({ children, title, backTo = "/" }: LayoutProps) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fff8f9]">
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
        {children}
      </div>
    </div>
  );
}
