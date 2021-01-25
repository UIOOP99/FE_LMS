import React, { Fragment } from 'react';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';

import ClassCard from 'Scenes/components/ClassCard';



export default function SessionsList({sessions}) {
    return <Fragment >
        {sessions.map((session) => 
            <ClassCard
            key={session.date + session.title}   
            Icon= {CastForEducationTwoToneIcon}
            title={session.title}
            primaryDesc={`${session.date}`}
            secondaryDesc={`وضعیت: ${session.status}`}/>)}
        </Fragment>;
};


  