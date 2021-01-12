import React, { useEffect } from "react";
import BaseLayout from "Scenes/components/BaseLayout";
import { axiosInstance } from "services/axios/axios";
import { EUserActionTypes } from "services/Contexts/UserContext/models";
import HomeCenterSection from "./components/HomeCenterSection";
import HomeLeftSidebar from "./components/HomeLeftSidebar";
import HomeRightSidebar from "./components/HomeRightSidebar";
import { useUserDispatch } from "services/Contexts/UserContext";

const Index = () => {
let dispatcher = useUserDispatch()


useEffect(() => {
axiosInstance.get("/profile").then((res)=>{
  dispatcher({
    type : EUserActionTypes.LOGIN ,
    payload : res.data
  })
})

}, [dispatcher])

  return (
    <BaseLayout
      CenterComponent={HomeCenterSection}
      RightComponent={HomeRightSidebar}
      LeftComponent={HomeLeftSidebar}
    />
  );
};

export default Index; 