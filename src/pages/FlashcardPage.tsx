import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { Shuffle, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import { getLessonById } from "../data";
import type { VocabItem } from "../types/lesson";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function hasKanji(item: VocabItem): boolean {
  return item.kanji !== item.hiragana && item.kanji.trim() !== "";
}

export default function FlashcardPage() {
  const { id } = useParams();
  const lesson = getLessonById(Number(id));

  const allItems: VocabItem[] = useMemo(
    () => lesson?.categories.flatMap((c) => c.items) ?? [],
    [lesson]
  );

  const [cards, setCards] = useState<VocabItem[]>(allItems);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleShuffle = () => {
    setCards(shuffle(allItems));
    setIndex(0);
    setFlipped(false);
  };

  const handleReset = () => {
    setCards(allItems);
    setIndex(0);
    setFlipped(false);
  };

  const go = (dir: 1 | -1) => {
    setIndex((i) => Math.max(0, Math.min(cards.length - 1, i + dir)));
    setFlipped(false);
  };

  if (!lesson || !cards.length) return null;

  const card = cards[index];
  const showBothSides = hasKanji(card);

  return (
    <Layout title={`Flashcard — Bài ${lesson.id}`} backTo="/">
      {/* Progress */}
      <div className="text-center text-sm text-gray-400 mb-6">
        {index + 1} / {cards.length}
      </div>

      {/* Flashcard 3D */}
      <div
        style={{ perspective: "1200px" }}
        className="w-full max-w-lg mx-auto mb-8"
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "260px",
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            cursor: "pointer",
          }}
        >
          {/* FRONT — Tiếng Nhật (kanji + hiragana, không có romaji) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              background: "white",
              border: "1.5px solid #e5e7eb",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {showBothSides ? (
              <>
                <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "#1f2937", lineHeight: 1.2 }}>
                  {card.kanji}
                </div>
                <div style={{ fontSize: "1.2rem", color: "#6b7280", marginTop: "0.75rem" }}>
                  {card.hiragana}
                </div>
              </>
            ) : (
              <div style={{ fontSize: "3rem", fontWeight: 700, color: "#1f2937", lineHeight: 1.2 }}>
                {card.kanji}
              </div>
            )}
          </div>

          {/* BACK — Nghĩa tiếng Việt (chỉ hiện nghĩa, không có chữ Nhật) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              background: "#f0fdfa",
              border: "1.5px solid #99f6e4",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 700, color: "#0f766e", textAlign: "center", lineHeight: 1.4 }}>
              {card.meaning}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          disabled={index === 0}
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-30 transition shadow-sm"
        >
          <ChevronLeft size={22} />
        </button>
        <span className="text-gray-400 text-sm w-20 text-center">
          {flipped ? "Đang xem nghĩa" : "Đang xem từ"}
        </span>
        <button
          disabled={index === cards.length - 1}
          onClick={(e) => { e.stopPropagation(); go(1); }}
          className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-30 transition shadow-sm"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Tools */}
      <div className="flex justify-center gap-3">
        <button
          onClick={handleShuffle}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition text-sm font-medium"
        >
          <Shuffle size={16} /> Xáo trộn
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition text-sm font-medium"
        >
          <RotateCcw size={16} /> Đặt lại
        </button>
      </div>
    </Layout>
  );
}
