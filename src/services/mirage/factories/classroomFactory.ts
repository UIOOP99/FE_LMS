import { random } from "lodash";
import { Factory, Server } from "miragejs";

export default Factory.extend({
  name: (i: number) => ([
    "کلاس طراحي شي گراي سيستم ها-۰۱",
    "کلاس اقتصاد مهندسي-۰۱",
    "کلاس مهندسي اينترنت-۰۱",
    "کلاس آزمايشگاه شبكه هاي كامپيوتري-۰۶",
  ][i % 4]),
  afterCreate(classroom: any, server: Server) {
    classroom.update({
      members: server.createList('user', random(1, 4))
    });
  }
});