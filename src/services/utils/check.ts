import { isArray } from "lodash";
import { IUserState } from "services/Contexts/UserContext/models";
import rules from "services/role";
import { TPermissions } from "services/role/model";
export const check = (
  user: IUserState,
  perform: TPermissions[] | undefined
) => {
  const { role } = user;
  const userPermissions = rules[role].static;
  let canAccess = true;
  /***
   * here we first check if perform is array (not undefined , beacuse private routes can have undefined permissions)
   * and have length (because if it is an empty array , any user can see that item)
   * then check userpermissions with that perform array to calculate accessibility of user
   */
  if (isArray(perform) && perform.length) {
    canAccess = perform?.some((item) => {
      return userPermissions.some((perm) => item === perm);
    });
  }
  return canAccess;
};
