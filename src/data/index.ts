import lesson4 from "./lesson4";
import lesson4Kanji from "./lesson4kanji";
import lesson5 from "./lesson5";
import lesson5Kanji from "./lesson5kanji";

export const lessons = [lesson4, lesson5];
export const kanjiLessons = [lesson4Kanji, lesson5Kanji];

export function getLessonById(id: number) {
  return lessons.find((l) => l.id === id);
}

export function getKanjiLessonById(id: number) {
  return kanjiLessons.find((k) => k.lessonId === id);
}
