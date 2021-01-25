import React from "react";
import LessonsListSkeleton from "Scenes/components/LessonListSkeleton";
import SessionsList from "Scenes/components/SessionsList";
import { ISession } from "Scenes/LessonPage/components/LessonLeftSidebar";
import { sessionsFetcher, sessionsKey } from "services/api/user";
import { useUserState } from "services/Contexts/UserContext";
import useSWR from "swr";

const HomeLeftSideBar = () => {
  const { idNumber } = useUserState();
  const { data } = useSWR<ISession[]>([sessionsKey, idNumber], sessionsFetcher);
  console.log(data, "home left");

  return data ? <SessionsList sessions={data} /> : <LessonsListSkeleton />;
};

export default HomeLeftSideBar;

const sessionsMock = [
  {
    title: "مباحث ویژه 1",
    date: "22 آذر 99 ساعت 18:00",
    status: "عدم حضور استاد",
  },
  { title: "زبان تخصصی", date: "12 دی 99 ساعت 10:00", status: "در حال ضبط" },
  { title: "مهندسی نت", date: "08 مهر 99 ساعت 21:00", status: "ضبط شده" },
];
