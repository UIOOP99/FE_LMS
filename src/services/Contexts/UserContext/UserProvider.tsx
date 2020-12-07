import React, { useReducer } from "react";
import { userReducer } from "./UserReducer";
import { EUserActionTypes, IUserState } from "./models";
import { userContext, userDispatchContext, useUserDispatch } from ".";
import { axiosInstance } from "services/axios/axios";
import { LSService } from "services/LocalStorage/localStorage";

const initial: IUserState = {
  username: "",
  isAuth: false,
  rule: "company",
};



const UserProvider: React.FC = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, initial);
  
  //fetch user data
  return (
    <userContext.Provider value={user}>
      <userDispatchContext.Provider value={dispatchUser}>
        {children}
      </userDispatchContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
