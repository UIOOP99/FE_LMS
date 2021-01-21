import React from 'react';
import BaseLayout from 'Scenes/components/BaseLayout';
import Profile from './components/ProfileCard';
import EmptySide from './components/EmptySide';

import { useUserState } from 'services/Contexts/UserContext';


const ProfilePage = () => {
  const userState = useUserState();


  return (
    <BaseLayout 
      CenterComponent={() => <Profile {...userState} />}
      RightComponent={EmptySide}
      LeftComponent={EmptySide}
    />
  );
};

export default ProfilePage;

