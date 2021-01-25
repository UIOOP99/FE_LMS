import { Factory, Server } from "miragejs";

export default Factory.extend({
  title: (i: number) => ["آزمون ۱", "آزمون 2", "آزمون ۴", "آزمون ۳"][i % 2],
  date: (i: number) =>
    [" ۵ آذر", " ۱۸ آذر", "۲۵ دی", " ۳۰ مهر", " ۱۵ آبان"][i % 2],
  time: (i: number) =>
    ["۲۰ دقیقه", "۲۰ دقیقه", "۳۰ دقیقه", "۷۰ دقیقه", "۷۰ دقیقه", "۶۰ دقیقه"][
      i % 2
    ],
  status: (i: number) => ["active", "inactive"][i % 2],
  afterCreate(exam: any, server: Server) {
    exam.update({
      classroom: exam.classroom || server.create("classroom"),
    });
  },
});
