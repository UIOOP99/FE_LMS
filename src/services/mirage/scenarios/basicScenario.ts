import { sample } from "lodash";
import { Server } from "miragejs";

export default (server: Server) => {
  // server.createList('user', 5);

  server.schema.create("user", {
    fullName: "صادق فرامرزی",
    idNumber: "963613051",
    avatarUrl: `https://i.pravatar.cc/150?u=${963613051}`,
    role: "student",
  }) as any;
  server.schema.create("user", {
    fullName: "بابک مرادی",
    idNumber: "123456789",
    avatarUrl: `https://i.pravatar.cc/150?u=${123456789}`,
    role: "professor",
  }) as any;
  const classrooms = server.createList("classroom", 4);
  // classrooms.forEach((cr) => server.createList('exam', 15, { cr }));

  const exams = server.createList("exam", 15);
  const sessions = server.createList("session", 20);
  exams.forEach((exam) => exam.update({ classroom: sample(classrooms) }));
  sessions.forEach((session) =>
    session.update({ classroom: sample(classrooms) })
  );
  server.createList("message", 15);
};
