import React, { Fragment } from "react";
import CastForEducationTwoToneIcon from "@material-ui/icons/CastForEducationTwoTone";

import ClassCard from "Scenes/components/ClassCard";

export default function SessionsList({ sessions }) {
  //   const { status, ...sessionsRest } = sessions;
  console.log(sessions);
  const innerStatus = (status) =>
    status === "active"
      ? "در حال برگزاری"
      : status === "recorded"
      ? "ضبط شده"
      : "درحال ضبط فایل";
  return (
    <Fragment>
      {sessions.map((session) => (
        <ClassCard
          key={session.date + session.title}
          Icon={CastForEducationTwoToneIcon}
          title={session.title}
          active={session.status === 'active'}
          //   status={session.status}
          //   date={session.date}
          //   time={session.time}
          primaryDesc={`${session.date} ${session.time}`}
          secondaryDesc={`وضعیت: ${innerStatus(session.status)}`}
        />
      ))}
    </Fragment>
  );
}
