import { List } from '@material-ui/core';
import React from 'react';
import CollapseList from 'Scenes/components/CollapseList';
import { People } from '@material-ui/icons';
import UserCard from 'Scenes/MainPage/components/UserCard';

const members = [
  {
    userFullName: "امیررضا اسماعیلی",
    idNumber: "963613009",
  },
  {
    userFullName: "امیررضا اسماعیلی",
    idNumber: "963613007",
  },
];

const LessonRightSidebar = () => {
  const MembersList = () => (
    <List disablePadding>
      {members.map(({userFullName, idNumber}) => (
        <UserCard 
          key={idNumber}
          userFullName={userFullName}
          idNumber={idNumber}
        />
      ))}
    </List>
  );

  return (
    <div>
      <List>
        <CollapseList 
          listTitle="اعضا" 
          ListIcon={<People />}
          ListComponent={MembersList}
          listCount={members.length}
        />
      </List>
    </div>
  );
};

export default LessonRightSidebar;