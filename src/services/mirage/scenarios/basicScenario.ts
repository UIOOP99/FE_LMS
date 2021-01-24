export default (server: any) => {
  server.createList("classroom", 10).forEach((classroom: any) => {
    server.createList("user", 5, { classroom });
    server.createList("message", 5, { classroom });
  });
  // server.createList('user', 5);
  // const classrooms = server.createList('classroom', 4);
  // classrooms.forEach((cr) => server.createList('exam', 15, { cr }));
  // const exams = server.createList('exam', 15);
  // exams.forEach((exam) => exam.update({classroom: sample(classrooms)}));
  // server.createList('message', 15);
};
