import lesson4 from "./lesson4";
// import lesson5 from "./lesson5";
// import lesson6 from "./lesson6";
// import lesson7 from "./lesson7";

export const lessons = [lesson4];

export function getLessonById(id: number) {
  return lessons.find((l) => l.id === id);
}
