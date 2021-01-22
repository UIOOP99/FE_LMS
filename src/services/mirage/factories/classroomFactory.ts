import { random } from "lodash";
import { Factory, Server } from "miragejs";

export default Factory.extend({
  name: (i: number) => ([
    "کلاس طراحي شي گراي سيستم ها-01",
    "کلاس اقتصاد مهندسي-01",
    "کلاس مهندسي اينترنت-01",
    "کلاس آزمايشگاه شبكه هاي كامپيوتري-06",
  ][i % 4]),
  afterCreate(classroom: any, server: Server) {
    classroom.update({
      members: server.createList('user', random(1, 4))
    });
  }
});