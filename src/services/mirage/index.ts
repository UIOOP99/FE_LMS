import { belongsTo, createServer, hasMany, JSONAPISerializer, Model, Serializer } from "miragejs";
import classroomFactory from "./factories/classroomFactory";
import examFactory from "./factories/examFactory";
import messageFactory from "./factories/messageFactory";
import userFactory from "./factories/userFactory";
import scenarios from "./scenarios";

createServer({
  models: {
    user: Model.extend({
      classroom: belongsTo("classroom"),
      messages: hasMany("message"),
    }),
    classroom: Model.extend({
      users: hasMany("user"),
      messages: hasMany("message"),
    }),
    message: Model.extend({
      user: belongsTo("user"),
      classroom: belongsTo("classroom"),
    }),
    // exam: Model.extend({
    //   classroom: belongsTo("classroom"),
    // }),
  },

  factories: {
    user: userFactory,
    classroom: classroomFactory,
    message: messageFactory,
    exam: examFactory,
  },

  serializers: {
    message: Serializer.extend({
      include: ["user", "classroom"],
      // extend:true
      // embed :true
    }),
    // message : RestSerializer.extend({
    //   include : ['user', 'classroom'],
    //   embed :true
    // })

    // user: RestSerializer.extend({
    //   include: ["classroom"],
    //   embed: true,
    // }),
    classroom: Serializer.extend({
      include: ["user"],
      // embed: true,
    }),
  },

  seeds: scenarios.basic,

  routes() {
    this.get("api/messages", (schema: any, req) => {
      // const { filter } = req.queryParams;
      // if (filter) {
      //   return schema.messages.where({ messageType: filter });
      // }
      return schema.messages.all();
    });
    this.get("api/lesson/:id/classroom");

    this.get("api/user/:idNumber/lesson", (schema: any, req) => {
      const { id } = req.params;
      const { classroom } = schema.users.find(id);
      console.log(classroom);
      // debugger
      return classroom;
    });

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
  },
});
// export {}
