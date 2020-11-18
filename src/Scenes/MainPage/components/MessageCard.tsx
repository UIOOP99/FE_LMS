import React from 'react';

import { Avatar, Button, Card, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import moment from 'moment-jalaali';


interface IFile {
  fileName: string,
  fileUrl: string,
}

interface IUserAnswer {
  userFullName: string,
  avatar?: string,
  answer: string,
}

interface IMessageCardProps {
  userFullName: string,
  avatar?: string,
  classRoomName?: string,
  message: string,
  attachedFiles?: IFile[],
  userAnswers?: IUserAnswer[],
  messageDate: Date,
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2)
  }
}));

const MessageCard = ({
    userFullName, avatar, classRoomName, message, attachedFiles, userAnswers, messageDate,
  }: IMessageCardProps) => {
  const classes = useStyles();

  const renderHeader = () => {
    return (
      <Grid item xs={12} container spacing={2}>
        <Grid item>
          <Avatar src="avatar"/>
        </Grid>
        <Grid item container xs direction="column">
          <Grid item >
            <Typography variant="body1">
              {userFullName}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="h6">
              {classRoomName}
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
        <Grid item xs={12}>
            <Typography variant="body1">{message}</Typography>
        </Grid>
        <Grid item container spacing={2}>
          {attachedFiles && attachedFiles.map((file) => (
            <Button variant="text">{file.fileName}</Button>
          ))}
        </Grid>
      </Grid>
    );
  };

  const renderFooter = () => {
    const dateString = moment(messageDate).fromNow();
    return (
      <Grid item xs={12} container spacing={2}>
      {
        userAnswers && 
        (<Grid item>
          <Button variant="contained" disableElevation>مشاهده جواب‌ها</Button>
        </Grid>)}
      <Grid item xs/>
      <Grid item>
        <Typography variant="body1">{dateString}</Typography>
      </Grid>
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