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
  },
  headerContainer: {
    marginBottom :theme.spacing(1),
  }, 
  contentContainer: {
    marginBottom :theme.spacing(1),    
  },
  footerContainer: {
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  moreButtonContainer: {
    display: 'flex',
    alignItems: 'center',    
  },
  dateStringContainer: {
    display: 'flex',
    alignItems: 'center',    
  },
}));

const MessageCard = ({
    userFullName, avatar, classRoomName, message, attachedFiles, userAnswers, messageDate,
  }: IMessageCardProps) => {
  const classes = useStyles();

  const renderHeader = () => {
    return (
      <Grid className={classes.headerContainer} item xs={12} container spacing={2}>
        <Grid className={classes.avatarContainer} item>
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
        <Grid className={classes.moreButtonContainer} item>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  const renderContent = () => {
    return (
      <Grid className={classes.contentContainer} item xs={12} container spacing={2}>
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
      <Grid className={classes.footerContainer} item xs={12} container spacing={2}>
      {
        userAnswers && 
        (<Grid item>
          <Button variant="contained" disableElevation>مشاهده جواب‌ها</Button>
        </Grid>)}
      <Grid item xs/>
      <Grid className={classes.dateStringContainer} item>
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