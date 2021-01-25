import React from "react";
import { AppActions } from "../AppActions";
import { EUserActionTypes, IUserState } from "./models";
export const userReducer: React.Reducer<IUserState, AppActions> = (
  userState,
  action
) => {
  switch (action.type) {
    case EUserActionTypes.LOGIN:
      console.log("in login", action.payload);
      return { ...action.payload, isAuth: true };
    case EUserActionTypes.LOGOUT:
      return { isAuth: false } as IUserState;
    default:
      console.log("in login");

      return { ...userState };
  }
};
