import React from 'react';
import BaseLayout from 'Scenes/components/BaseLayout';
import Profile from './components/ProfileCard';
import EmptySide from './components/EmptySide';
import ProfileRightSidebar from './components/ProfileRightSidebar';


const ProfilePage = () => {

  return (
    <BaseLayout 
      CenterComponent={Profile}
      RightComponent={ProfileRightSidebar}
      LeftComponent={EmptySide}
    />
  );
};

export default ProfilePage;

