import React from 'react';
import LessonsList from 'Scenes/components/LessonsList';

import { useUserState } from 'services/Contexts/UserContext';

const HomeRightSidebar = () => {
  const { idNumber } = useUserState();

  return <LessonsList idNumber={idNumber} />;
};

export default HomeRightSidebar;
