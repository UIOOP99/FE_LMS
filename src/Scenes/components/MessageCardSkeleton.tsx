import { Card, Grid, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },
}));
const MessageCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Card className={`${classes.card}`} elevation={0}>
      <Grid item>
        <Skeleton variant="circle" width={40} height={40} />
      </Grid>
      salam
    </Card>
  );
};

export default MessageCardSkeleton;
