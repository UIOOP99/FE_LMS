import React, { useReducer } from "react";
import { userReducer } from "./UserReducer";
import { IUserState } from "./models";
import { userContext, userDispatchContext } from ".";

const initial: IUserState = {
  username: "",
  isAuth: false,
  rule: "company",
};
const UserProvider: React.FC = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, initial);
  //fetch user data
  // develop use effect 
  return (
    <userContext.Provider value={user}>
      <userDispatchContext.Provider value={dispatchUser}>
        {children}
      </userDispatchContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
