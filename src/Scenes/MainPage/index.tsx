import { Card, Grid } from "@material-ui/core";
import React from "react";
import Spacer from "Scenes/components/Spacer";
import Navbar from "./components/Navbar";

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
  return (
    <Grid container direction="column">
      <Navbar />
      <Spacer spacing={2} orientation="h"/>
      <Grid item xs container wrap="nowrap">
        <Grid item xs={3}>
          <Filler height="100%" text="insert right sidebar component here"/>
        </Grid>
        <Spacer spacing={2} orientation="v"/>
        <Grid item xs container direction="column" wrap="nowrap">
          <Grid item>
            <Filler height="100px" text="insert create post component here"/>
          </Grid>
          <Spacer spacing={2} orientation="h"/>
          <Grid item xs>
            <Filler height="700px" text="insert filter and message list component here"/>
          </Grid>
        </Grid>
        <Spacer spacing={2} orientation="v"/>
        <Grid item xs={3}>
          <Filler height="100%" text="insert left sidebar component here"/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
