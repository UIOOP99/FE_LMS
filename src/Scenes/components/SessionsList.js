import React, { Fragment } from "react";
import CastForEducationTwoToneIcon from "@material-ui/icons/CastForEducationTwoTone";

import ClassCard from "Scenes/components/ClassCard";

export default function SessionsList({ sessions }) {
  //   const { status, ...sessionsRest } = sessions;
  console.log(sessions);
  return (
    <Fragment>
      {sessions.map((session) => (
        <ClassCard
          key={session.date + session.title}
          Icon={CastForEducationTwoToneIcon}
          title={session.title}
          status={session.status}
          date={session.date}
          time={session.time}
          //   primaryDesc={`${session.date}`}
          //   secondaryDesc={`وضعیت: ${innerStatus(session.status)}`}
        />
      ))}
    </Fragment>
  );
}
