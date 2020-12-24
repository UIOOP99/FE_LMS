import { List } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react';
import CollapseList from 'Scenes/components/CollapseList';
import ExamCard from 'Scenes/components/ExamCard';

const exams = [
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
  const ExamList = () => (
    <List disablePadding>
      {exams.map(({title, date, time, status}) => (
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