import lesson4 from "./lesson4";
import lesson4Kanji from "./lesson4kanji";
import lesson5 from "./lesson5";
import lesson5Kanji from "./lesson5kanji";
import lesson6 from "./lesson6";
import lesson6Kanji from "./lesson6kanji";
import lesson7 from "./lesson7";
import lesson7Kanji from "./lesson7kanji";

export const lessons = [lesson4, lesson5, lesson6, lesson7];
export const kanjiLessons = [lesson4Kanji, lesson5Kanji, lesson6Kanji, lesson7Kanji];

export function getLessonById(id: number) {
  return lessons.find((l) => l.id === id);
}

export function getKanjiLessonById(id: number) {
  return kanjiLessons.find((k) => k.lessonId === id);
}
