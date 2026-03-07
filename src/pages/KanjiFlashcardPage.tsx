import { useParams } from "react-router-dom";
import { useState } from "react";
import { Shuffle, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import { getKanjiLessonById } from "../data";
import type { KanjiItem } from "../types/lesson";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function KanjiFlashcardPage() {
  const { id } = useParams();
  const lesson = getKanjiLessonById(Number(id));
  const allCards = lesson?.categories.flatMap(c => c.kanji_list) ?? [];

  const [cards, setCards] = useState<KanjiItem[]>(allCards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleShuffle = () => { setCards(shuffle(allCards)); setIndex(0); setFlipped(false); };
  const handleReset = () => { setCards(allCards); setIndex(0); setFlipped(false); };
  const go = (dir: 1 | -1) => {
    setIndex((i) => Math.max(0, Math.min(cards.length - 1, i + dir)));
    setFlipped(false);
  };

  if (!lesson || !cards.length) return null;
  const card = cards[index];

  return (
    <Layout title={`Flashcard Kanji — Bài ${id}`} backTo="/">
      <div className="text-center text-sm text-gray-400 mb-6">{index + 1} / {cards.length}</div>

      <div style={{ perspective: "1200px" }} className="w-full max-w-lg mx-auto mb-8"
        onClick={() => setFlipped(f => !f)}>
        <div style={{
          position: "relative", width: "100%", height: "280px",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "pointer",
        }}>
          {/* FRONT */}
          <div style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
            borderRadius: "1rem", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center", padding: "2rem",
            background: "white", border: "1.5px solid #e5e7eb",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <div style={{ fontSize: "5rem", fontWeight: 700, color: "#1f2937", lineHeight: 1 }}>{card.kanji}</div>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f59e0b", letterSpacing: "0.15em", marginTop: "0.75rem" }}>
              {card.han_viet}
            </div>
          </div>

          {/* BACK */}
          <div style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "1rem", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center", padding: "1.5rem",
            background: "#fffbeb", border: "1.5px solid #fcd34d",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#92400e", marginBottom: "1rem", textAlign: "center" }}>
              {card.kanji_meaning}
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {card.words.map((w, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "white", borderRadius: "0.5rem",
                  padding: "0.4rem 0.75rem", border: "1px solid #fde68a",
                }}>
                  <span style={{ fontWeight: 700, color: "#1f2937", fontSize: "1rem" }}>{w.word}</span>
                  <span style={{ color: "#6b7280", fontSize: "0.8rem", textAlign: "right", maxWidth: "60%" }}>
                    {w.reading}<br />{w.meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <button disabled={index === 0} onClick={(e) => { e.stopPropagation(); go(-1); }}
          className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-30 transition shadow-sm">
          <ChevronLeft size={22} />
        </button>
        <button disabled={index === cards.length - 1} onClick={(e) => { e.stopPropagation(); go(1); }}
          className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-30 transition shadow-sm">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex justify-center gap-3">
        <button onClick={handleShuffle}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition text-sm font-medium">
          <Shuffle size={16} /> Xáo trộn
        </button>
        <button onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition text-sm font-medium">
          <RotateCcw size={16} /> Đặt lại
        </button>
      </div>
    </Layout>
  );
}
