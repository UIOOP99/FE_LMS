import React, { Fragment } from "react";
import ClassCardSkeleton from "./ClassCardSkeleton";

export default function LessonsListSkeleton() {
  //  const { data: { lessons } } = useSWR([lessonsKey, userId], lessonsFetcher);

  return (
    <Fragment>
      {Array(4)
        .fill("")
        .map((lesson) => (
          <ClassCardSkeleton />
        ))}
    </Fragment>
  );
}
