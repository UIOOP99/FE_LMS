import React from "react";
import { useParams } from "react-router-dom";
import FilterSelection from "Scenes/components/FilterSelection";
import { IMessageCardProps } from "Scenes/components/MessageCard";
import MessageList from "Scenes/components/MessageList";
import MessageCardSkeleton from "Scenes/components/MessageListSkeleton";
import ScrollToTopOnMount from "Scenes/components/ScrollToTopOnMount";
import SendMessage from "Scenes/components/SendMessage";
import Spacer from "Scenes/components/Spacer";
import {
  classroomInfoFetcher,
  classroomInfoKey,
  lessonMessagesFetcher,
  lessonMessagesKey,
} from "services/api/lesson";
import useMessageFilter from "services/hooks/useMessageFilter";
import useSWR from "swr";

const LessonCenterSection = () => {
  const { id: lessonId } = useParams<{ id: string }>();
  const [filter] = useMessageFilter();
  const { data: messages } = useSWR<IMessageCardProps[]>(
    [lessonMessagesKey, lessonId, filter.query],
    lessonMessagesFetcher
  );
  const { data: classroomInfo } = useSWR(
    [classroomInfoKey, lessonId],
    classroomInfoFetcher
  );
  const messageCardMocks =
    messages?.sort(
      (a, b) =>
        new Date(b.messageDate).getTime() - new Date(a.messageDate).getTime()
    ) || [];

  return (
    <>
      <ScrollToTopOnMount />
      {/* <Filler height="100px" text="insert create post component here"/> */}
      <SendMessage classroomId={lessonId} />
      <Spacer spacing={2} orientation="h" />
      <FilterSelection title={classroomInfo?.name} />
      <Spacer spacing={2} orientation="h" />
      {messages ? (
        <MessageList messages={messageCardMocks} />
      ) : (
        <MessageCardSkeleton />
      )}
    </>
  );
};

export default LessonCenterSection;
