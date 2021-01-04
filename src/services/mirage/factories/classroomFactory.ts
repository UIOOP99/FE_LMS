import { Factory } from "miragejs";

export default Factory.extend({
  name: (i: number) => ([
    "کلاس طراحي شي گراي سيستم ها-01",
    "کلاس اقتصاد مهندسي-01",
    "کلاس مهندسي اينترنت-01",
    "کلاس آزمايشگاه شبكه هاي كامپيوتري-06",
  ][i % 4]),
});