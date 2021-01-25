import React from "react";
import LessonsListSkeleton from "Scenes/components/LessonListSkeleton";
import LessonsList from "Scenes/components/LessonsList";
import { lessonsFetcher, lessonsKey } from "services/api/user";
import { useUserState } from "services/Contexts/UserContext";
import useSWR from "swr";

export interface ILesson {
  id: number;
  name: string;
  lessonCode: string;
  memberCount: number;
}
const HomeRightSidebar = () => {
  const { idNumber, id } = useUserState();

  const { data: lessonData } = useSWR<{ classrooms: ILesson[] }>(
    [lessonsKey, id],
    lessonsFetcher
  );
  // console.log(lessonData);

  // useEffect(() => {
  //   const fetchDate = async () => {
  //     const res = await axiosInstance.get(`/users/${id}/lessons`);
  //     console.log(res.data);
  //   };
  //   fetchDate();
  // }, [id]);
  console.log(lessonData)

  return !!lessonData ? (
    <LessonsList
      idNumber={idNumber}
      lessons={lessonData.classrooms.slice(0, 8)}
    />
  ) : (
    <LessonsListSkeleton />
  );
  // return
};

export default HomeRightSidebar;
