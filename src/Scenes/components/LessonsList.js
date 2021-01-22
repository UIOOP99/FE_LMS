import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import ClassTwoToneIcon from '@material-ui/icons/ClassTwoTone';

import { lessonsFetcher, lessonsKey } from 'services/api/user';
import ClassCard from 'Scenes/components/ClassCard';



export default function LessonsList({idNumber}) {
//  const { data: { lessons } } = useSWR([lessonsKey, userId], lessonsFetcher);
    const lessons = lessonsMock;

    return <Fragment >
        {lessons.map((lesson) => 
            <ClassCard
            key={lesson.code}   
            Icon= {ClassTwoToneIcon}
            title={lesson.title}
            primaryDesc={`کد درس ${lesson.code}`}
            secondaryDesc={`${lesson.memebersNumber} عضو`}/>)}
        </Fragment>;
};

const lessonsMock = [
    {title: 'مهندسی نت', code: '36-20-027', memebersNumber: '42'},
    {title: 'مباحث ویژه 1', code: '36-21-025', memebersNumber: '29'},
    {title: 'زبان تخصصی', code: '36-21-366', memebersNumber: '12'}
];


  