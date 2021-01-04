import {belongsTo, createServer, hasMany, Model} from 'miragejs';
import scenarios from './scenarios';
import messageFactory from './factories/messageFactory';
import userFactory from './factories/userFactory';
import classroomFactory from './factories/classroomFactory';


createServer({
  models: {
    user: Model,
    classroom: Model.extend({
      members: hasMany('user')
    }),
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
    this.get('api/lesson/:id/classroom');
    this.get('api/lesson/:lessonId/messages', (schema: any, req) => {
      const {lessonId} = req.params;
      const {name: lessonName} = schema.classrooms.find(lessonId);
      return schema.messages.where({classRoomName: lessonName});
    });
    this.get('api/lesson/:lessonId/members', (schema: any, req) => {
      const {lessonId} = req.params;
      const {members} = schema.classrooms.find(lessonId);
      return members;
    });
  }
});