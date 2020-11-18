import React from 'react'
import PropTypes from 'prop-types'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import './Sidebar.css'

const Sidebar = ({ title, icon, children }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-header-right">
          <div>{icon}</div>
          <span>{title}</span>
        </div>
        <div className="sidebar-header-left">
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="sidebar-items">{children}</div>
    </div>
  )
}

export default Sidebar

Sidebar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}
