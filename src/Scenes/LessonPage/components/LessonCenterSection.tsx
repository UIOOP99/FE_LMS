import { Card } from '@material-ui/core';
import React from 'react';
import FilterSelection from 'Scenes/components/FilterSelection';
import MessageList from 'Scenes/components/MessageList';
import Spacer from 'Scenes/components/Spacer';
import { IMessageCardProps } from 'Scenes/MainPage/components/MessageCard';
import { lessonMessagesFetcher, lessonUrl } from 'services/api/lesson';
import useSWR from 'swr';

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

const LessonCenterSection = ({lessonId}: {lessonId: string}) => {
  const {data} = useSWR<IMessageCardProps[]>([lessonUrl, lessonId], lessonMessagesFetcher);
  const messageCardMocks = data||[];

   return (
    <>
      <Filler height="100px" text="insert create post component here"/>
      <Spacer spacing={2} orientation="h"/>
      <FilterSelection />
      <Spacer spacing={2} orientation="h"/>
      <MessageList messages={messageCardMocks}/>
     </>
  );
};

export default LessonCenterSection;