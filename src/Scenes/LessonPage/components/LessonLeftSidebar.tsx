import { List } from "@material-ui/core";
import { AssignmentIndOutlined, CalendarToday, Edit } from "@material-ui/icons";
import React from "react";
import { useParams } from "react-router-dom";
import CollapseList from "Scenes/components/CollapseList";
import ExamCard from "Scenes/components/ExamCardMigrate";
import LessonsListSkeleton from "Scenes/components/LessonListSkeleton";
import SessionsList from "Scenes/components/SessionsList";
import {
  lessonExamsFetcher,
  lessonExamsKey,
  lessonSessionsFetcher,
  lessonSessionsKey,
} from "services/api/lesson";
import useSWR from "swr";

interface ISession {
  date: string;
  id: number;
  status: string;
  time: string;
  title: string;
}

const LessonLeftSidebar = () => {
  const { id: lessonId } = useParams<{ id: string }>();
  const { data: examsData } = useSWR(
    [lessonExamsKey, lessonId],
    lessonExamsFetcher
  );
  const { data: sessionData } = useSWR<ISession[]>(
    [lessonSessionsKey, lessonId],
    lessonSessionsFetcher
  );
  // const { data: { sessions } } = useSWR([lessonSessionsKey, lessonId], lessonSessionsFetcher);

  // const exams = examsData || [];

  const ExamList = () => (
    <List disablePadding>
      {examsData ? (
        examsData.map(
          ({
            title,
            id,
            date,
            time,
            status,
          }: {
            title: string;
            date: string;
            time: string;
            status: string;
            id: number;
          }) => (
            <ExamCard
              key={id}
              title={title}
              date={date}
              time={time}
              status={status}
              icon={<AssignmentIndOutlined />}
            />
          )
        )
      ) : (
        <LessonsListSkeleton />
      )}
    </List>
  );

  const SesstionList = () =>
    sessionData ? (
      <SessionsList sessions={sessionData} />
    ) : (
      <LessonsListSkeleton />
    );

  return (
    <div>
      <List>
        <CollapseList
          listTitle="آزمون ها"
          ListIcon={<Edit />}
          ListComponent={ExamList}
          listCount={(examsData || []).length}
        />
      </List>
      <List>
        <CollapseList
          listTitle="جلسات"
          ListIcon={<CalendarToday />}
          ListComponent={SesstionList}
          listCount={(sessionData || []).length}
        />
      </List>
    </div>
  );
};

export default LessonLeftSidebar;
