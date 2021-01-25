import { sample } from 'lodash';
import { Factory, Server } from "miragejs";

export default Factory.extend({
  title: (i: number) => ["جلسه ۱", "جلسه 2", "جلسه ۴", "جلسه ۳"][i % 4],
  date: (i: number) =>
    [" ۵ آذر", " ۱۸ آذر", "۲۵ دی", " ۳۰ مهر", " ۱۵ آبان"][i % 5],
  time: (i: number) => ["ساعت ۱۸:۰۰", "ساعت ۲۰:۰۰", "ساعت ۱۰:۰۰"][i % 3],
  status: (i: number) => ["active", "recorded", "recording" ][i % 3],
  isToday : (i : number) => sample([true , false]),
  afterCreate(session: any, server: Server) {
    session.update({
      classroom: session.classroom || server.create("classroom"),
    });
  },
});
