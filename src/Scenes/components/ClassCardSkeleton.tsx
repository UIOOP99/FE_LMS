import { Grid, ListItem, ListItemIcon } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

interface IClassCardProps {
  title: string;
  Icon?: any;
  primaryDesc?: string;
  secondaryDesc?: string;
}

const ClassCardSkeleton = () => {
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemIcon>
        <Skeleton variant="circle" width={40} height={40} />
      </ListItemIcon>

      <Grid container xs={6} direction="column">
        <Grid item xs={6}>
          <Skeleton variant="text" width={60} height={20} />
        </Grid>
        <Grid item xs={6}>
          <Skeleton variant="text" width={100} height={20} />
        </Grid>
        <Grid item xs={6}>
          <Skeleton variant="text" width={70} height={20} />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ClassCardSkeleton;
