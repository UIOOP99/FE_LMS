import faker from "faker";
import { random } from "lodash";
import { Factory } from "miragejs";
faker.locale = "fa";

export default Factory.extend({
  // fullName: (i: number) =>
  //   [
  //     "امیرمحمد چراغی",
  //     "سیدعلی سجادی",
  //     "امیررضا اسماعیلی",
  //     "امیرمهدی سلیمانی",
  //     "سجاد یزدان پرست",
  //   ][i % 5],
  fullName: () => `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatarUrl() {
    return `https://i.pravatar.cc/150?u=${this.idNumber}`;
  },
  // // idNumber: () => `${sample(["963613045", "963613009"])}`,
  idNumber: () => `${random(1111111, 9999999)}`,
  // afterCreate(user: any, server: any) {
  //   server.createList("message", 5, { user });
  // },
});
