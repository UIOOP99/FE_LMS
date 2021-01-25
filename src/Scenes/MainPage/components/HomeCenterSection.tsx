import React from "react";
import FilterSelection from "Scenes/components/FilterSelection";
import MessageList from "Scenes/components/MessageList";
import MessageListSkeleton from "Scenes/components/MessageListSkeleton";
import ScrollToTopOnMount from "Scenes/components/ScrollToTopOnMount";
import SendMessage from "Scenes/components/SendMessage";
import Spacer from "Scenes/components/Spacer";
import {
  timelineMessagesFetcher,
  timelineMessagesKey,
} from "services/api/main";
import useMessageFilter from "services/hooks/useMessageFilter";
import useSWR from "swr";
import { IMessageCardProps } from "../../components/MessageCard";

const HomeCenterSection = () => {
  const [filter] = useMessageFilter();
  const { data: messages, revalidate } = useSWR<IMessageCardProps[]>(
    [timelineMessagesKey, filter.query],
    timelineMessagesFetcher
  );
  const messageCardMocks =
    messages?.slice().sort(
      (a, b) => new Date(b.messageDate).getTime() - new Date(a.messageDate).getTime()
    ) || [];

  return (
    <>
      <ScrollToTopOnMount />
      {/* <Filler height="100px" text="insert create post component here"/> */}
      <SendMessage updateMessages={revalidate} />
      <Spacer spacing={2} orientation="h" />
      <FilterSelection title="تایم‌لاین" />
      <Spacer spacing={2} orientation="h" />
      {/* <MessageListSkeleton/> */}
      {messages ? (
        <MessageList messages={messageCardMocks} updateMessages={revalidate} />
      ) : (
        <MessageListSkeleton />
      )}
    </>
  );
};

export default HomeCenterSection;
