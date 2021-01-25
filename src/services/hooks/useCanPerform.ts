import { useUserState } from "services/Contexts/UserContext";
import { TPermissions } from "services/role/model";
import {check} from "../utils/check";
export const useCanPerform = (perform: TPermissions[]) => {
  const user = useUserState();
  return check(user, perform);
};
