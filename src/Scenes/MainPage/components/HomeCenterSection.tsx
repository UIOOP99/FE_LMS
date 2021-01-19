import { Card } from '@material-ui/core';
import React from 'react';
import FilterSelection from 'Scenes/components/FilterSelection';
import MessageList from 'Scenes/components/MessageList';
import ScrollToTopOnMount from 'Scenes/components/ScrollToTopOnMount';
import Spacer from 'Scenes/components/Spacer';
import { timelineMessagesFetcher, timelineMessagesKey } from 'services/api/main';
import useMessageFilter from 'services/hooks/useMessageFilter';
import useSWR from 'swr';
import { IMessageCardProps } from '../../components/MessageCard';

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

const HomeCenterSection = () => {
  const [filter] = useMessageFilter();
  const { data: messages } = useSWR<IMessageCardProps[]>([timelineMessagesKey, filter.query], timelineMessagesFetcher);
  const messageCardMocks = messages ||[];

  return (
    <>
      <ScrollToTopOnMount />
      <Filler height="100px" text="insert create post component here"/>
      <Spacer spacing={2} orientation="h"/>
      <FilterSelection title="تایم‌لاین"/>
      <Spacer spacing={2} orientation="h"/>
      <MessageList messages={messageCardMocks}/>
    </>
  );
};

export default HomeCenterSection;