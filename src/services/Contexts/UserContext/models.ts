import { IRules } from "services/role/model";

export interface IUserState {
  username: string;
  fullName?: string,
  idNumber?: string,
  avatarUrl?: string,
  isAuth: boolean;
  role: keyof IRules;
}
//-----------user acitions------------------
export enum EUserActionTypes {
  LOGIN,
  LOGOUT,
}
interface ILoginAction {
  type: EUserActionTypes.LOGIN;
  payload: IUserState;
}
interface ILogoutAction {
  type: EUserActionTypes.LOGOUT;
}

export type UserActions = ILoginAction | ILogoutAction;
