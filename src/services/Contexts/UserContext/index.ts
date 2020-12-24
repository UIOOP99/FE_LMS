import { createContext, Dispatch, useContext } from "react";
import { AppActions } from "../AppActions";
import { IUserState } from "./models";
export const initial: IUserState = {
  username: "amirreza",
  idNumber: "963613009",
  fullName: "امیررضا اسماعیلی",
  isAuth: true,
  role: "student",
};

export const userContext = createContext<IUserState>(initial);
export const userDispatchContext = createContext<Dispatch<AppActions>>(
  () => {}
);

export const useUserState = () => useContext(userContext);
export const useUserDispatch = () => useContext(userDispatchContext);
