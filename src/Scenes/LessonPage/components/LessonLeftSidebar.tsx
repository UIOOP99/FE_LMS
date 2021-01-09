import { List } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import CollapseList from 'Scenes/components/CollapseList';
import ExamCard from 'Scenes/components/ExamCard';
import { lessonExamsFetcher, lessonExamsKey } from 'services/api/lesson';
import useSWR from 'swr';

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

const LessonLeftSidebar = () => {
  const { id: lessonId } = useParams<{id: string}>();
  const { data: examsData } = useSWR([lessonExamsKey, lessonId], lessonExamsFetcher);
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
    </div>
  );
};

export default LessonLeftSidebar;