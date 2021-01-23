import { Factory, Server } from "miragejs";

export default Factory.extend({
  title: (i: number) => ([
    'آزمون ۱',
    'آزمون 2',
  ][i % 2]),
  date: (i: number) => ([
    ' ۵ آذر',
    ' 6 آذر',
  ][i % 2]),
  time: (i: number) => ([
    '۲۰ دقیقه',
    '۲۰ دقیقه',
  ][i % 2]),
  status: (i: number) => ([
    'شروع نشده',
    'شروع نشده',
  ][i % 2]),
  afterCreate(exam: any, server: Server) {
    exam.update({
      classroom: exam.classroom || server.create('classroom'),
    });
  }
});