import { List } from '@material-ui/core';
import React from 'react';
import CollapseList from 'Scenes/components/CollapseList';
import { People } from '@material-ui/icons';
import UserCard from 'Scenes/components/UserCard';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { lessonMembersFetcher, lessonMembersKey } from 'services/api/lesson';

const LessonRightSidebar = () => {
  const { id: lessonId } = useParams<{id: string}>();
  const { data } = useSWR([lessonMembersKey, lessonId], lessonMembersFetcher);
  const lessonMembers = data || [];

  
  const MembersList = () => (
    <List disablePadding>
      {lessonMembers.map((
        {fullName, avatarUrl, idNumber}: {fullName: string, avatarUrl: string, idNumber: string}
        ) => (
        <UserCard 
          key={idNumber}
          userFullName={fullName}
          avatarUrl={avatarUrl}
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
          listCount={lessonMembers.length}
        />
      </List>
    </div>
  );
};

export default LessonRightSidebar;