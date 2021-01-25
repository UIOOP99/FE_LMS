import { createContext, Dispatch, useContext } from "react";
import { AppActions } from "../AppActions";
import { IUserState } from "./models";
export const initial: IUserState = {
  username: "sadegh",
  idNumber: "963613051",
  fullName: "صادق فرامرزی",
  isAuth: true,
  role: "student",
  avatarUrl: `https://i.pravatar.cc/150?u=963613051`,
  id: 1,
};

export const userContext = createContext<IUserState>(initial);
export const userDispatchContext = createContext<Dispatch<AppActions>>(
  () => {}
  
);

export const useUserState = () => useContext(userContext);
export const useUserDispatch = () => useContext(userDispatchContext);
