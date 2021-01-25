import { Card, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

interface IFile {
  fileName: string;
  fileUrl: string;
}

interface IUserAnswer {
  userFullName: string;
  avatarUrl?: string;
  answer: string;
}

export interface IMessageCardProps {
  userFullName: string;
  avatarUrl?: string;
  classRoomName?: string;
  message: string;
  attachedFiles?: IFile[];
  userAnswers?: IUserAnswer[];
  messageDate: Date;
  user?: any;
  classroom?: any;
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
  },
  headerContainer: {
    marginBottom: theme.spacing(1),
  },
  contentContainer: {
    marginBottom: theme.spacing(1),
  },
  footerContainer: {},
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  moreButtonContainer: {
    display: "flex",
    alignItems: "center",
  },
  dateStringContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const MessageCardSkeleton = () => {
  const classes = useStyles();

  const renderHeader = () => {
    return (
      <Grid
        className={classes.headerContainer}
        item
        xs={12}
        container
        spacing={2}
      >
        <Grid className={classes.avatarContainer} item>
          <Skeleton variant="circle" width={40} height={40} />
        </Grid>
        <Grid item container xs direction="column">
          <Grid item>
            <Skeleton variant="text" width={100} />
          </Grid>
          <Grid item>
            <Skeleton variant="text" width={100} />
          </Grid>
        </Grid>
        <Grid className={classes.moreButtonContainer} item></Grid>
      </Grid>
    );
  };

  const renderContent = () => {
    return (
      <Grid
        className={classes.contentContainer}
        item
        xs={12}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          {/* <Skeleton variant="rect" width={210} height={118} /> */}
        </Grid>
      </Grid>
    );
  };

  const renderFooter = () => {
    return (
      <Grid
        className={classes.footerContainer}
        item
        xs={12}
        container
        spacing={2}
      >
        <Grid item>
          <Skeleton variant="rect" width={80} height={30} />
        </Grid>
        <Grid item xs />
        <Grid className={classes.dateStringContainer} item>
          <Skeleton variant="text" width={80} />
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {Array(5)
        .fill("")
        .map((item) => (
          <Card className={`${classes.card} mb-4`} elevation={0}>
            <Grid container>
              {renderHeader()}
              {renderContent()}
              {renderFooter()}
            </Grid>
          </Card>
        ))}
    </>
  );
};

export default MessageCardSkeleton;
