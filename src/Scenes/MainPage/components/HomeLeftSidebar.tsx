import { Card } from '@material-ui/core';
import React from 'react';

const Filler = ({ text, height }: {text:string, height: string}) => (
  <Card 
    style={{
      backgroundColor: 'gainsboro',
      height,
    }}
    elevation={0}
  >
    {text}
  </Card>
);

const HomeLeftSidebar = () => {
  return (
    <Filler height="100%" text="insert left sidebar component here"/>
  );
};

export default HomeLeftSidebar;