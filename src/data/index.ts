import lesson4 from "./lesson4";
import lesson4Kanji from "./lesson4kanji";
import lesson5 from "./lesson5";
import lesson5Kanji from "./lesson5kanji";
import lesson6 from "./lesson6";
import lesson6Kanji from "./lesson6kanji";

export const lessons = [lesson4, lesson5, lesson6];
export const kanjiLessons = [lesson4Kanji, lesson5Kanji, lesson6Kanji];

export function getLessonById(id: number) {
  return lessons.find((l) => l.id === id);
}

export function getKanjiLessonById(id: number) {
  return kanjiLessons.find((k) => k.lessonId === id);
}
