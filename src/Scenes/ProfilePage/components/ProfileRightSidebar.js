import React from "react";
import { useParams } from "react-router-dom";
import LessonsListSkeleton from "Scenes/components/LessonListSkeleton";

import LessonsList from "Scenes/components/LessonsList";
import {
  lessonsFetcher,
  lessonsKey,
  sessionsFetcher,
  sessionsKey,
} from "services/api/user";
import useSWR from "swr";

const ProfileRightSidebar = () => {
  const { id: idNumber } = useParams();
  // const { data } = useSWR([sessionsKey, idNumber], sessionsFetcher);

  const { data } = useSWR([lessonsKey, idNumber], lessonsFetcher);
  return data ? (
    <LessonsList lessons={data.classrooms.slice(0, 8)} idNumber={idNumber} />
  ) : (
    <LessonsListSkeleton />
  );
};

export default ProfileRightSidebar;
