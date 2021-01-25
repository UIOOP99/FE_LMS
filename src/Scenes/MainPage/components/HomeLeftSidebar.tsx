import React from "react";
import SessionsList from "Scenes/components/SessionsList";

const HomeRightSidebar = () => {
  //  const { data: { sessions } } = useSWR([allSessionsKey], allSessionsFetcher);

  return <SessionsList sessions={sessionsMock} />;
};

export default HomeRightSidebar;

const sessionsMock = [
  {
    title: "مباحث ویژه 1",
    date: "22 آذر 99 ساعت 18:00",
    status: "عدم حضور استاد",
  },
  { title: "زبان تخصصی", date: "12 دی 99 ساعت 10:00", status: "در حال ضبط" },
  { title: "مهندسی نت", date: "08 مهر 99 ساعت 21:00", status: "ضبط شده" },
];
