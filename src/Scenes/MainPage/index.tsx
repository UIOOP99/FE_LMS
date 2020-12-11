import { Card, Grid } from "@material-ui/core";
import React from "react";
import BaseLayout from "Scenes/components/BaseLayout";
import Spacer from "Scenes/components/Spacer";

// this component is only a placeholder and should be removed after actual components have been replaced.
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

const Index = () => {

  const centerComponent = () => (
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
  const rightComponent = () => (
    <Filler height="100%" text="insert right sidebar component here"/>
  );
  const leftComponent = () => (
    <Filler height="100%" text="insert left sidebar component here"/>
  );

  return (
    <BaseLayout
      CenterComponent={centerComponent}
      RightComponent={rightComponent}
      LeftComponent={leftComponent}
    />
  );
};

export default Index;
