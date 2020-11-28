import { Card, Grid } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";

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

const index = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={3}>
        <Filler height="100%" text="insert right sidebar component here"/>
      </Grid>
      <Grid item xs={6} container spacing={2}>
        <Grid item xs={12}>
          <Filler height="100px" text="insert create post component here"/>
        </Grid>
        <Grid item xs={12}>
          <Filler height="calc(100vh - 284px)" text="insert filter and message list component here"/>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Filler height="100%" text="insert left sidebar component here"/>
      </Grid>
    </Grid>
  );
};

export default index;
