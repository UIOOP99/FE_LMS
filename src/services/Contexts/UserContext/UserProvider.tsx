import React, { useReducer } from "react";
import { initial, userContext, userDispatchContext } from ".";
import { userReducer } from "./UserReducer";

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
