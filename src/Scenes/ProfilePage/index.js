import React from 'react';
import BaseLayout from 'Scenes/components/BaseLayout';
import Profile from './components/ProfileCard';
import EmptySide from './components/EmptySide';


const ProfilePage = () => {
  return (
    <BaseLayout 
      CenterComponent={Profile}
      RightComponent={EmptySide}
      LeftComponent={EmptySide}
    />
  );
};

export default ProfilePage;

