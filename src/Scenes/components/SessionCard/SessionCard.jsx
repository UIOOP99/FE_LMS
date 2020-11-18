import React from 'react'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded'

import './SessionCard.css'

const SessionCard = ({
  name = 'session name',
  number = '6',
  date = 'session date - time',
  status = 'session status',
}) => {
  return (
    <div className="session-card-container">
      <DateRangeRoundedIcon className="session-card-icon" />
      <div className="session-card-texts">
        <span className="session-card-name">{`${name} - session ${number}`}</span>
        <span className="session-card-date">{date}</span>
        <span className="session-card-status">{status}</span>
      </div>
    </div>
  )
}

export default SessionCard
