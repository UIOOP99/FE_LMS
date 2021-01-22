import { Card } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import FilterSelection from 'Scenes/components/FilterSelection';
import MessageList from 'Scenes/components/MessageList';
import Spacer from 'Scenes/components/Spacer';
import { IMessageCardProps } from 'Scenes/components/MessageCard';
import { classroomInfoFetcher, classroomInfoKey, lessonMessagesFetcher, lessonMessagesKey } from 'services/api/lesson';
import useMessageFilter from 'services/hooks/useMessageFilter';
import useSWR from 'swr';
import ScrollToTopOnMount from 'Scenes/components/ScrollToTopOnMount';

const Filler = ({ text, height }: {text:string, height: string}) => (
  <Card 
    style={{
      backgroundColor: 'gainsboro',
      height,
    }}
    elevation={0}
  >
    {text}
  </Card>
);

const LessonCenterSection = () => {
  const { id: lessonId } = useParams<{id: string}>();
  const [filter] = useMessageFilter();
  const { data: messages } = useSWR<IMessageCardProps[]>([lessonMessagesKey, lessonId, filter.query], lessonMessagesFetcher);
  const { data: classroomInfo } = useSWR([classroomInfoKey, lessonId], classroomInfoFetcher);
  const messageCardMocks = messages ||[];

   return (
    <>
      <ScrollToTopOnMount />
      <Filler height="100px" text="insert create post component here"/>
      <Spacer spacing={2} orientation="h"/>
      <FilterSelection title={classroomInfo?.name}/>
      <Spacer spacing={2} orientation="h"/>
      <MessageList messages={messageCardMocks}/>
    </>
  );
};

export default LessonCenterSection;