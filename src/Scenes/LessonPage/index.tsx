import React from 'react';
import { useParams } from 'react-router-dom';
import BaseLayout from 'Scenes/components/BaseLayout';
import LessonCenterSection from './components/LessonCenterSection';
import LessonLeftSidebar from './components/LessonLeftSidebar';
import LessonRightSidebar from './components/LessonRightSidebar';

const LessonPage = () => {
  const { id } = useParams<{id: string}>();
  
  return (
    <BaseLayout 
      CenterComponent={() => (<LessonCenterSection lessonId={id}/>)}
      RightComponent={LessonRightSidebar}
      LeftComponent={LessonLeftSidebar}
    />
  );
};

export default LessonPage;