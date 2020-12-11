import { Grid } from '@material-ui/core';
import React, { ComponentType } from 'react';
import Navbar from 'Scenes/MainPage/components/Navbar';
import Spacer from './Spacer';

interface IBaseLayoutProps {
  CenterComponent: ComponentType,
  RightComponent: ComponentType,
  LeftComponent: ComponentType,
}

const BaseLayout = ({CenterComponent, RightComponent, LeftComponent}: IBaseLayoutProps ) => {
  return (
    <Grid container direction="column">
      <Navbar />
      <Spacer spacing={2} orientation="h"/>
      <Grid item xs container wrap="nowrap">
        <Grid item xs={3}>
          <RightComponent />
        </Grid>
        <Spacer spacing={2} orientation="v"/>
        <Grid item xs>
          <CenterComponent />
        </Grid>
        <Spacer spacing={2} orientation="v"/>
        <Grid item xs={3}>
          <LeftComponent />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BaseLayout;