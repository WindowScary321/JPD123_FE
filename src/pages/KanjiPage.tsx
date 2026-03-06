import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getKanjiLessonById } from "../data";

export default function KanjiPage() {
  const { id } = useParams();
  const lesson = getKanjiLessonById(Number(id));

  if (!lesson) return <div className="p-8 text-center">Không tìm thấy dữ liệu Kanji.</div>;

  return (
    <Layout title={`Chữ Hán — Bài ${id}`} backTo="/">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lesson.kanji_list.map((item, i) => (
          <div key={i}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-amber-300 hover:shadow-md transition">
            <div className="flex items-start gap-4 mb-4">
              <div style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1, color: "#1f2937", minWidth: "64px", textAlign: "center" }}>
                {item.kanji}
              </div>
              <div>
                <div className="text-xs font-bold text-amber-500 tracking-widest">{item.han_viet}</div>
                <div className="text-base font-semibold text-gray-700 mt-0.5">{item.kanji_meaning}</div>
              </div>
            </div>
            <div className="space-y-2">
              {item.words.map((w, wi) => (
                <div key={wi} className="flex items-start gap-3 pl-2 border-l-2 border-amber-200">
                  <span className="font-bold text-gray-800 text-base min-w-[60px]">{w.word}</span>
                  <div>
                    <div className="text-sm text-gray-500">{w.reading}</div>
                    <div className="text-sm text-gray-700">{w.meaning}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
