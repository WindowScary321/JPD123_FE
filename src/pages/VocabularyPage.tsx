import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getLessonById } from "../data";

export default function VocabularyPage() {
  const { id } = useParams();
  const lesson = getLessonById(Number(id));

  if (!lesson) return <div className="p-8 text-center">Không tìm thấy bài học.</div>;

  return (
    <Layout title={`Từ vựng — Bài ${lesson.id}`} backTo="/">
      {lesson.categories.map((cat, ci) => (
        <section key={ci} className="mb-10">
          <h2 className="text-lg font-bold text-teal-700 border-b-2 border-teal-200 pb-2 mb-4">
            {cat.category_name}
          </h2>
          <div className="space-y-2">
            {cat.items.map((item, ii) => (
              <div
                key={ii}
                className="grid grid-cols-[1fr_1.2fr_1fr] gap-3 items-center p-3 bg-white rounded-xl border border-gray-100 hover:border-rose-200 transition"
              >
                <span className="font-bold text-gray-900 text-base">{item.kanji}</span>
                <span className="text-gray-500 text-sm">
                  {item.hiragana !== item.kanji ? item.hiragana : ""}
                  {item.romaji ? <span className="text-gray-400 ml-1">({item.romaji})</span> : ""}
                </span>
                <span className="text-gray-700 text-sm">{item.meaning}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
