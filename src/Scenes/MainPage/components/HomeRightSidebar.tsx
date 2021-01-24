import React from "react";
import LessonsList from "Scenes/components/LessonsList";
import { lessonsFetcher, lessonsKey } from "services/api/user";
import { useUserState } from "services/Contexts/UserContext";
import useSWR from "swr";

const HomeRightSidebar = () => {
  const { idNumber } = useUserState();
  const {data:classData} = useSWR(lessonsKey , lessonsFetcher)
  console.log(classData ,' in component')

  // return <LessonsListSkeleton/>
  return <LessonsList idNumber={idNumber} />;
};

export default HomeRightSidebar;
