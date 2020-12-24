import { IRules } from "./model";

const rules: IRules = {
  student: {
    static: [],
  },
  professor: {
    static: ["homeworks:create", "homeworks:read"],
  },
};

export default rules;
