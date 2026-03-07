import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getKanjiLessonById } from "../data";
import { KanjiItem } from "../types/lesson";

export default function KanjiPage() {
  const { id } = useParams();
  const lesson = getKanjiLessonById(Number(id));

  if (!lesson) return <div className="p-8 text-center">Không tìm thấy dữ liệu Kanji.</div>;

  return (
    <Layout title={`Kanji - Bài ${id}`} backTo="/">
      <div className="max-w-6xl mx-auto mt-4 space-y-12 pb-12">
        {lesson.categories.map((category, index) => {
          // Category đầu tiên (index === 0) sẽ được highlight bằng màu Tím
          const isCore = index === 0;

          return (
            <section key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-8 w-2 rounded-full ${isCore ? 'bg-purple-600' : 'bg-gray-400'}`}></div>
                <h2 className={`text-2xl font-bold ${isCore ? 'text-gray-800' : 'text-gray-600'}`}>
                  {category.category_label}
                </h2>
              </div>
              <KanjiTable data={category.kanji_list} isCore={isCore} />
            </section>
          );
        })}
      </div>
    </Layout>
  );
}

// Sub-component vẽ bảng
function KanjiTable({ data, isCore }: { data: KanjiItem[]; isCore: boolean }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border ${isCore ? 'border-purple-100' : 'border-gray-200'} overflow-hidden`}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-700 min-w-[800px] border-collapse">
          <thead className={`${isCore ? 'bg-purple-50/50' : 'bg-gray-50/80'} text-xs uppercase font-bold text-gray-500 tracking-wider`}>
            <tr>
              <th className="px-6 py-4 w-32 text-center border-b border-gray-200">Kanji</th>
              <th className="px-6 py-4 w-48 border-b border-gray-200">Hán Việt & Ý nghĩa</th>
              <th className="px-6 py-4 w-48 border-b border-gray-200">Từ có chứa Kanji</th>
              <th className="px-6 py-4 border-b border-gray-200">Ý nghĩa</th>
              <th className="px-6 py-4 border-b border-gray-200">Cách đọc</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-100">
            {data.map((item, index) => {
              const rowSpan = item.words.length > 0 ? item.words.length : 1;

              return (
                <React.Fragment key={index}>
                  {item.words.length > 0 ? (
                    item.words.map((word, wIndex) => (
                      <tr key={`${index}-${wIndex}`} className="hover:bg-gray-50/50 transition-colors">
                        {wIndex === 0 && (
                          <>
                            <td rowSpan={rowSpan} className="align-top px-6 py-8 text-center border-r border-gray-100">
                              <span className={`text-7xl font-bold ${isCore ? 'text-purple-600' : 'text-gray-400'} block leading-none`}>
                                {item.kanji}
                              </span>
                            </td>
                            <td rowSpan={rowSpan} className="align-top px-6 py-8 border-r border-gray-100">
                              <div className="font-bold text-gray-800 uppercase tracking-wide mb-1 text-base">
                                {item.han_viet}
                              </div>
                              <div className="text-gray-500 text-sm leading-relaxed italic">
                                {item.kanji_meaning}
                              </div>
                            </td>
                          </>
                        )}
                        <td className="px-6 py-4 font-bold text-gray-800 text-base border-r border-gray-50">
                          {word.word}
                        </td>
                        <td className="px-6 py-4 text-gray-600 border-r border-gray-50">
                          {word.meaning}
                        </td>
                        <td className="px-6 py-4 text-gray-500 font-medium">
                          {word.reading}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="align-top px-6 py-8 text-center border-r border-gray-100">
                        <span className={`text-7xl font-bold ${isCore ? 'text-purple-600' : 'text-gray-400'} block leading-none`}>
                          {item.kanji}
                        </span>
                      </td>
                      <td className="align-top px-6 py-8 border-r border-gray-100">
                        <div className="font-bold text-gray-800 uppercase tracking-wide mb-1 text-base">
                          {item.han_viet}
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed italic">
                          {item.kanji_meaning}
                        </div>
                      </td>
                      <td colSpan={3} className="px-6 py-4 text-gray-400 italic text-center">
                        Chưa có từ vựng ví dụ
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}