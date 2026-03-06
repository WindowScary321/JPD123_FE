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
