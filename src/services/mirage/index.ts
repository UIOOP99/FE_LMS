import {belongsTo, createServer, hasMany, Model, Serializer} from 'miragejs';
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
      user: belongsTo('user'),
      classroom: belongsTo('classroom'),
    }),
  }, 

  factories: {
    user: userFactory,
    classroom: classroomFactory,
    message: messageFactory,
  },

  serializers: {
    message: Serializer.extend({
      include: ['user', 'classroom']
    })
  },

  seeds: scenarios.basic,

  routes() {
    this.get('api/home/messages', (schema: any, req) => {
      const {filter} = req.queryParams;
      if (filter) {
        return schema.messages.where({messageType: filter});
      }
      return schema.messages.all();
    });
    this.get('api/lesson/:id/classroom');
    this.get('api/lesson/:lessonId/messages', (schema: any, req) => {
      const {lessonId} = req.params;
      const {filter} = req.queryParams;
      const {name: lessonName} = schema.classrooms.find(lessonId);
      if (filter) {
        return schema.messages.where({classRoomName: lessonName, messageType: filter});
      }
      return schema.messages.where({classRoomName: lessonName});
    });
    this.get('api/lesson/:lessonId/members', (schema: any, req) => {
      const {lessonId} = req.params;
      const {members} = schema.classrooms.find(lessonId);
      return members;
    });
  }
});