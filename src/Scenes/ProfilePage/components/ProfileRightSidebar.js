import React from 'react';
import { useParams } from 'react-router-dom';

import LessonsList from 'Scenes/components/LessonsList';


const ProfileRightSidebar = () => {
  const { id: idNumber } = useParams();

  return (
     <LessonsList idNumber={idNumber}/>
  );
};

export default ProfileRightSidebar;

