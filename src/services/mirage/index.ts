import { belongsTo, createServer, hasMany, Model, Serializer } from "miragejs";
import classroomFactory from "./factories/classroomFactory";
import examFactory from "./factories/examFactory";
import messageFactory from "./factories/messageFactory";
import sessionFactory from "./factories/sessionFactory";
import userFactory from "./factories/userFactory";
import scenarios from "./scenarios";

createServer({
  models: {
    user: Model.extend({
      classroom: hasMany("classroom"),
    }),
    classroom: Model.extend({
      members: hasMany("user"),
      sessions: hasMany("session"),
      exams: hasMany("exam"),
    }),
    message: Model.extend({
      user: belongsTo("user"),
      classroom: belongsTo("classroom"),
    }),
    exam: Model.extend({
      classroom: belongsTo("classroom"),
    }),
    session: Model.extend({
      classroom: belongsTo("classroom"),
    }),
  },

  factories: {
    user: userFactory,
    classroom: classroomFactory,
    message: messageFactory,
    exam: examFactory,
    session: sessionFactory,
  },

  serializers: {
    message: Serializer.extend({
      include: ["user", "classroom"],
    }),
    user: Serializer.extend({
      include: ["classroom"],
    }),
    classroom: Serializer.extend({
      include: ["user"],
    }),
  },

  seeds: scenarios.basic,

  routes() {
    this.get("api/home/messages", (schema: any, req) => {
      const { filter } = req.queryParams;
      if (filter) {
        return schema.messages.where({ messageType: filter });
      }
      return schema.messages.all();
    });
    this.get("api/lesson/:id/classroom");
    this.get("api/lesson/:lessonId/messages", (schema: any, req) => {
      const { lessonId } = req.params;
      const { filter } = req.queryParams;
      const { name: lessonName } = schema.classrooms.find(lessonId);
      if (filter) {
        return schema.messages.where({
          classRoomName: lessonName,
          messageType: filter,
        });
      }
      return schema.messages.where({ classRoomName: lessonName });
    });
    this.get("api/lesson/:lessonId/members", (schema: any, req) => {
      const { lessonId } = req.params;
      const { members } = schema.classrooms.find(lessonId);
      return members;
    });
    this.get("api/lesson/:lessonId/exams", (schema: any, req) => {
      const { lessonId } = req.params;
      const exams = schema.exams.where({ classroomId: lessonId });
      return exams;
    });
    this.get("api/lesson/:lessonId/sessions", (schema: any, req) => {
      const { lessonId } = req.params;
      const sessions = schema.sessions.where({ classroomId: lessonId });
      return sessions;
    });
    this.get("api/users/:userId/lessons", (schema: any, req) => {
      const { userId } = req.params;
      // console.log(schema.users.find(userId));
      const lessons = schema.classrooms.where({ membersId: userId });

      return schema.classrooms.all();
      // return lessons;
    });
  },
});
