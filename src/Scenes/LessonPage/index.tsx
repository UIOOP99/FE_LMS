import React from 'react';
import BaseLayout from 'Scenes/components/BaseLayout';
import LessonCenterSection from './components/LessonCenterSection';
import LessonLeftSidebar from './components/LessonLeftSidebar';
import LessonRightSidebar from './components/LessonRightSidebar';

const LessonPage = () => {
  return (
    <BaseLayout 
      CenterComponent={LessonCenterSection}
      RightComponent={LessonRightSidebar}
      LeftComponent={LessonLeftSidebar}
    />
  );
};

export default LessonPage;