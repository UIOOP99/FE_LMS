import React, { useState } from 'react';

import { Avatar, Button, Card, Grid, IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import moment from 'moment-jalaali';
import { useUserState } from 'services/Contexts/UserContext';
import { useHistory } from 'react-router-dom';


interface IFile {
  fileName: string,
  fileUrl: string,
}

interface IUserAnswer {
  userFullName: string,
  avatarUrl?: string,
  answer: string,
}

export interface IMessageCardProps {
  userFullName: string,
  avatarUrl?: string,
  classRoomName?: string,
  message: string,
  attachedFiles?: IFile[],
  userAnswers?: IUserAnswer[],
  messageDate: Date,
  user?: any,
  classroom?: any,
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
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
  classroomNameString: {
    cursor: 'pointer',
    display: 'inline',
  },
}));

const MessageCard = ({
    userFullName, avatarUrl, classRoomName, message, attachedFiles, userAnswers, messageDate,
    className, user, classroom
  }: {className?: string} & IMessageCardProps) => {
  const classes = useStyles();

  const {role, fullName: myFullName} = useUserState();
  const [moreOptionsMenuAnchor, setMoreOptionsMenuAnchor] = useState<HTMLElement | null>(null);

  const showAnswersButton = role === 'professor';

  //TODO: need a more elegant way
  const isMyOwnMessage = userFullName === myFullName;

  const history = useHistory();

  const handleUserProfileClick = () => {
    return;
  };

  const handleClassRoomClick = () => {
    classroom && history.push(`/lesson/${classroom.id}`);
  };

  const handleAttachedFileClick = (file: IFile) => {
    return;
  };

  const handleShowAnswersClick = () => {
    return;
  };

  const handleDeleteMessage = () => {
    return;
  };

  const renderHeader = (showMoreButton: boolean) => {
    return (
      <Grid className={classes.headerContainer} item xs={12} container spacing={2}>
        <Grid className={classes.avatarContainer} item>
          <IconButton onClick={handleUserProfileClick}>
            <Avatar src={user?.avatarUrl}/>
          </IconButton>
        </Grid>
        <Grid item container xs direction="column">
          <Grid item >
            <Typography variant="body1" onClick={handleUserProfileClick}>
              {userFullName}
            </Typography>
          </Grid>
          <Grid item >
            <Typography 
              className={classroom && classes.classroomNameString} 
              variant="h6" 
              onClick={handleClassRoomClick}
            >
              {classRoomName}
            </Typography>
          </Grid>
        </Grid>
        {
          showMoreButton &&
          <Grid className={classes.moreButtonContainer} item>
            <IconButton onClick={(e) => setMoreOptionsMenuAnchor(e.currentTarget)}>
              <MoreHoriz />
            </IconButton>
          </Grid>
        }
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
            <Button 
              key={file.fileName} 
              variant="text" 
              onClick={() => handleAttachedFileClick(file)}
            >
              {file.fileName}
            </Button>
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
        showAnswersButton && userAnswers && 
        (<Grid item>
          <Button 
            variant="contained" 
            disableElevation
            onClick={handleShowAnswersClick}
          >
            مشاهده جواب‌ها
          </Button>
        </Grid>)}
      <Grid item xs/>
      <Grid className={classes.dateStringContainer} item>
        <Typography variant="body1">{dateString}</Typography>
      </Grid>
      </Grid>
    );
  };

  const MenuItems = [];
  isMyOwnMessage && MenuItems.push(<MenuItem key="delete" onClick={handleDeleteMessage}>حذف</MenuItem>);

  return (
    <Card className={`${className} ${classes.card}`} elevation={0}>
      <Grid container>
        {renderHeader(!!MenuItems?.length)}
        {renderContent()}
        {renderFooter()}
      </Grid>
      {
        !!MenuItems?.length &&
        <Menu
          anchorEl={moreOptionsMenuAnchor}
          open={!!moreOptionsMenuAnchor}
          onClose={() => setMoreOptionsMenuAnchor(null)}
        >
          {MenuItems}
        </Menu>
      }
    </Card>
  );
};

export default MessageCard;