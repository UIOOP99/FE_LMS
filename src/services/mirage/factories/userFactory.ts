import { Factory } from "miragejs";

export default Factory.extend({
  fullName: (i: number) => ([
    "امیرمحمد چراغی",
    "سیدعلی سجادی",
    "امیررضا اسماعیلی",
    "امیرمهدی سلیمانی",
    "سجاد یزدان پرست",
  ][i % 5]),
  avatarUrl() {
    return `https://i.pravatar.cc/150?u=${this.fullName}`;
  }
});