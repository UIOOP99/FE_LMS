import { random, sample } from "lodash";
import { Factory } from "miragejs";

export default Factory.extend({
  fullName: (i: number) =>
    [
      "امیرمحمد چراغی",
      "سیدعلی سجادی",
      "امیررضا اسماعیلی",
      "امیرمهدی سلیمانی",
      "سجاد یزدان پرست",
    ][i % 5],
  avatarUrl() {
    return `https://i.pravatar.cc/150?u=${this.idNumber}`;
  },
  role(i :number) {
    return 'student'
  },
  idNumber: () =>
    `${sample([
      "963613045",
      "963613009",
      "963613011",
      "963613012",
      "963613050",
    ])}`,
  // afterCreate(user: any, server: any) {
  //   user.update({
  //     classrooms: server.createList("classroom", random(1, 20)),
  //   });
  // },
});
