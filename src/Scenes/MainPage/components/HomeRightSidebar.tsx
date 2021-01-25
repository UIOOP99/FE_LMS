import React from 'react';
import LessonsListSkeleton from 'Scenes/components/LessonListSkeleton';
import LessonsList from 'Scenes/components/LessonsList';

import { useUserState } from 'services/Contexts/UserContext';

const HomeRightSidebar = () => {
  const { idNumber } = useUserState();

  return <LessonsList idNumber={idNumber} />;
  // return <LessonsListSkeleton/>
};

export default HomeRightSidebar;
