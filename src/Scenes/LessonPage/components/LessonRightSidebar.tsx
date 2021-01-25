import { List } from "@material-ui/core";
import { People } from "@material-ui/icons";
import React from "react";
import { useParams } from "react-router-dom";
import CollapseList from "Scenes/components/CollapseList";
import LessonsListSkeleton from "Scenes/components/LessonListSkeleton";
import UserCard from "Scenes/components/UserCard";
import { lessonMembersFetcher, lessonMembersKey } from "services/api/lesson";
import useSWR from "swr";

const LessonRightSidebar = () => {
  const { id: lessonId } = useParams<{ id: string }>();
  const { data } = useSWR([lessonMembersKey, lessonId], lessonMembersFetcher);

  const MembersList = () => (
    <List disablePadding>
      {data ? (
        data.map(
          ({
            fullName,
            avatarUrl,
            idNumber,
          }: {
            fullName: string;
            avatarUrl: string;
            idNumber: string;
          }) => (
            <UserCard
              key={idNumber}
              userFullName={fullName}
              avatarUrl={avatarUrl}
              idNumber={idNumber}
            />
          )
        )
      ) : (
        <LessonsListSkeleton />
      )}
    </List>
  );

  return (
    <div>
      <List>
        <CollapseList
          listTitle="اعضا"
          ListIcon={<People />}
          ListComponent={MembersList}
          listCount={(data || []).length}
        />
      </List>
    </div>
  );
};

export default LessonRightSidebar;
