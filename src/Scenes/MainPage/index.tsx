import React from "react";
import BaseLayout from "Scenes/components/BaseLayout";
import HomeCenterSection from "./components/HomeCenterSection";
import HomeLeftSidebar from "./components/HomeLeftSidebar";
import HomeRightSidebar from "./components/HomeRightSidebar";

const Index = () => {
  return (
    <BaseLayout
      CenterComponent={HomeCenterSection}
      RightComponent={HomeRightSidebar}
      LeftComponent={HomeLeftSidebar}
    />
  );
};

export default Index; 