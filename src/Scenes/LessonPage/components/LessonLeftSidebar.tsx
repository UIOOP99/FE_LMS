import { List } from '@material-ui/core';
import { Edit, CalendarToday } from '@material-ui/icons';
import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import CollapseList from 'Scenes/components/CollapseList';
import ExamCard from 'Scenes/components/ExamCard';
import SessionsList from 'Scenes/components/SessionsList';
import { lessonExamsFetcher, lessonExamsKey, lessonSessionsFetcher, lessonSessionsKey } from 'services/api/lesson';

const examss = [
  {
    title: 'آزمون ۱',
    date: ' ۵ آذر',
    time: '۲۰ دقیقه',
    status: 'شروع نشده',
  },
  {
    title: 'آزمون 2',
    date: ' 6 آذر',
    time: '۲۰ دقیقه',
    status: 'شروع نشده',
  },
];

const sessionsMock = [
  {title: 'مباحث ویژه 1', date: '22 آذر 99 ساعت 18:00', status: 'عدم حضور استاد'},
  {title: 'زبان تخصصی', date: '12 دی 99 ساعت 10:00', status: 'در حال ضبط'},
  {title: 'مهندسی نت', date: '08 مهر 99 ساعت 21:00', status: 'ضبط شده'},
];

const LessonLeftSidebar = () => {
  const { id: lessonId } = useParams<{id: string}>();
  const { data: examsData } = useSWR([lessonExamsKey, lessonId], lessonExamsFetcher);
  // const { data: { sessions } } = useSWR([lessonSessionsKey, lessonId], lessonSessionsFetcher);

  const exams = examsData || [];
  
  const ExamList = () => (
    <List disablePadding>
      {exams.map(({title, date, time, status}: {title: string, date: string, time: string, status: string}) => (
        <ExamCard 
          key={title}
          ExamName={title}
          ExamDate={date}
          ExamTime={time}
          ExamStatus={status}
        />
      ))}
    </List>
  );

  const SesstionList = () => <SessionsList sessions={sessionsMock} />;

  return (
    <div>
      <List>
        <CollapseList 
          listTitle="آزمون ها" 
          ListIcon={<Edit />}
          ListComponent={ExamList}
          listCount={exams.length}
        />
      </List>
      <List>
        <CollapseList 
          listTitle="جلسات" 
          ListIcon={<CalendarToday />}
          ListComponent={SesstionList}
          listCount={sessionsMock.length}
        />
      </List>
    </div>
  );
};

export default LessonLeftSidebar;