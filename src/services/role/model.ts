export interface IRulePermissionTypes {
  static: TPermissions[];
}
export interface IRules {
  student: IRulePermissionTypes;
  professor: IRulePermissionTypes;
}
/**
 * add interface for each role
 */
/**
 * add all of permissions of all roles
 */
export type TPermissions = "homeworks:read" | "homeworks:create";
