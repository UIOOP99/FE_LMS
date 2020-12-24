import { useTheme } from '@material-ui/core';
import React from 'react';


const Spacer = ({ spacing, orientation }: {spacing: number, orientation: 'v'|'h'}) => {
  const {spacing: muiSpacing} = useTheme();
  return (<div style={
    {...(orientation === 'v' ? {width: muiSpacing(spacing)} : {height: muiSpacing(spacing)})}
  }/>);
};

export default Spacer;