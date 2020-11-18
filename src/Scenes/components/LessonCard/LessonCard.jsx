import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'

import './LessonCard.css'

const LessonCard = ({
  name = 'class name',
  code = '36-20-075',
  studentsCount = 60,
}) => {
  return (
    <div className="lesson-card-container">
      <HomeRoundedIcon className="lesson-card-icon" />
      <div className="lesson-card-texts">
        <span className="lesson-card-name">{name}</span>
        <span className="lesson-card-date">{`class code: ${code}`}</span>
        <span className="lesson-card-status">{`class memeber count: ${studentsCount} members`}</span>
      </div>
    </div>
  )
}

export default LessonCard
