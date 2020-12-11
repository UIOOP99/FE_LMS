import { Card, Grid } from '@material-ui/core';
import React from 'react';
import Spacer from 'Scenes/components/Spacer';

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

const LessonCenterSection = () => {
  return (
    <Grid container direction="column" wrap="nowrap">
       <Grid item>
         <Filler height="100px" text="insert create post component here"/>
       </Grid>
       <Spacer spacing={2} orientation="h"/>
       <Grid item xs>
         <Filler height="700px" text="insert filter and message list component here"/>
       </Grid>
     </Grid>
  );
};

export default LessonCenterSection;