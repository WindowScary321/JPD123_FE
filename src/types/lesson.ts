export interface VocabItem {
  kanji: string;
  hiragana: string;
  romaji: string;
  meaning: string;
}

export interface VocabCategory {
  category_name: string;
  items: VocabItem[];
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  categories: VocabCategory[];
}

// --- Kanji types ---
export interface KanjiWord {
  word: string;
  meaning: string;
  reading: string;
}

export interface KanjiItem {
  kanji: string;
  han_viet: string;
  kanji_meaning: string;
  words: KanjiWord[];
}

export interface KanjiLesson {
  lessonId: number;
  title: string;
  kanji_list: KanjiItem[];
}
