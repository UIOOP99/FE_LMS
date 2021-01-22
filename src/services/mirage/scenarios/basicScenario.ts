import { sample } from "lodash";
import { Server } from "miragejs";

export default (server: Server) => {
  server.createList('user', 5);
  const classrooms = server.createList('classroom', 4);
  // classrooms.forEach((cr) => server.createList('exam', 15, { cr }));
  const exams = server.createList('exam', 15);
  exams.forEach((exam) => exam.update({classroom: sample(classrooms)}));
  server.createList('message', 15);
  exams.forEach((exam: any) => console.log(exam.classroomId));
};