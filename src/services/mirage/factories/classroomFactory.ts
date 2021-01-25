import faker from "faker";
import { random } from "lodash";
import { Factory } from "miragejs";

export default Factory.extend({
  name: (i: number) =>
    [
      "کلاس طراحي شي گراي سيستم ها-۰۱",
      "کلاس اقتصاد مهندسي-۰۱",
      "کلاس مهندسي اينترنت-۰۱",
      "کلاس آزمايشگاه شبكه هاي كامپيوتري-۰۶",
    ][i % 4],
  // lessonCode: `${random(100, 200)}-${random(40, 50)}-${random(120, 150)}`,
  lessonCode: (i: number) =>
    `${faker.random.number(30) * i + 30}-${faker.random.number(50) * i + 10}-${
      faker.random.number(30) * i + 40
    }`,
  memberCount: (i: number) => faker.random.number(20) * i + 7,
  afterCreate(classroom: any, server: any) {
    classroom.update({
      members: server.createList("user", random(1, 20)),
    });
  },
});
