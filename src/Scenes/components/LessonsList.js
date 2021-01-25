import React, { Fragment } from "react";
import PropTypes from "prop-types";
import useSWR from "swr";
import ClassTwoToneIcon from "@material-ui/icons/ClassTwoTone";

import { lessonsFetcher, lessonsKey } from "services/api/user";
import ClassCard from "Scenes/components/ClassCard";
import { useHistory } from "react-router-dom";

export default function LessonsList({ idNumber, lessons }) {
  //  const { data: { lessons } } = useSWR([lessonsKey, userId], lessonsFetcher);
  //   const lessons = lessonsMock;
  const history = useHistory();

  const handleItemOnClick = (id) => history.push(`lesson/${id}`);
  console.log(lessons);

  return (
    <Fragment>
      {lessons.map((lesson) => (
        <ClassCard
          onClick={() => handleItemOnClick(lesson.id)}
          key={lesson.id}
          Icon={ClassTwoToneIcon}
          title={lesson.name}
          primaryDesc={`کد درس ${lesson.lessonCode}`}
          secondaryDesc={`${lesson.memberCount} عضو`}
        />
      ))}
    </Fragment>
  );
}

const lessonsMock = [
  { id: "30", title: "مهندسی نت", code: "36-20-027", memebersNumber: "42" },
  { id: "30", title: "مباحث ویژه 1", code: "36-21-025", memebersNumber: "29" },
  { id: "30", title: "زبان تخصصی", code: "36-21-366", memebersNumber: "12" },
];
