import { Avatar, Card, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React from 'react';

interface IFile {
  fileName: string,
  fileUrl: string,
}

interface IUserAnswer {
  userName: string,
  avatar?: string,
  answer: string,
}

interface IMessageCardProps {
  userName: string,
  avatar?: string,
  classRoomName?: string,
  message: string,
  attachedFiles?: IFile[],
  userAnswers?: IUserAnswer[],
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2)
  }
}));

const MessageCard = ({
    userName, avatar, classRoomName, message, attachedFiles, userAnswers, ...otherProps
  }: IMessageCardProps) => {
  const classes = useStyles();

  const renderHeader = () => {
    return (
      <Grid item xs={12} container spacing={2}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item container xs direction="column">
          <Grid item >
            <Typography variant="body1">
              user name
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="h6">
              class name
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  const renderContent = () => {
    return (
      <Grid item xs={12} container spacing={2}>
        content
      </Grid>
    );
  };

  const renderFooter = () => {
    return (
      <Grid item xs={12} container spacing={2}>
        footer
      </Grid>
    );
  };

  return (
    <Card className={classes.card}>
      <Grid container>
        {renderHeader()}
        {renderContent()}
        {renderFooter()}
      </Grid>
    </Card>
  );
};

export default MessageCard;