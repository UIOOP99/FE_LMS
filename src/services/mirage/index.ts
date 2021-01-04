import {belongsTo, createServer, Model} from 'miragejs';
import scenarios from './scenarios';
import messageFactory from './factories/messageFactory';
import userFactory from './factories/userFactory';
import classroomFactory from './factories/classroomFactory';


createServer({
  models: {
    user: Model,
    classroom: Model,
    message: Model.extend({
      user: belongsTo(),
      classroom: belongsTo(),
    }),
  }, 

  factories: {
    user: userFactory,
    classroom: classroomFactory,
    message: messageFactory,
  },

  seeds: scenarios.basic,

  routes() {
    this.get('api/feed/messages');
    this.get('api/lesson/:lessonId/messages', (schema: any, req) => {
      const {lessonId} = req.params;
      const {name: lessonName} = schema.classrooms.find(lessonId);
      return schema.messages.where({classRoomName: lessonName});
    });
  }
});