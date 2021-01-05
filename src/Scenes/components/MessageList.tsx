import { makeStyles } from '@material-ui/core';
import React from 'react';
import MessageCard, { IMessageCardProps } from 'Scenes/components/MessageCard';

const useStyles = makeStyles((theme) => ({
  messageItem: {
    marginBottom: theme.spacing(2),
  }
}));

const MessageList = ({messages}: {messages: IMessageCardProps[]}) => {
  const classes = useStyles();
  return (
    <>
      {
        messages.map(({message, userFullName, avatarUrl,
           messageDate, attachedFiles, classRoomName, userAnswers,
            user, classroom}) => (
          <MessageCard
            key={`${userFullName}-${messageDate}`}
            className={classes.messageItem}
            message={message}
            userFullName={userFullName}
            avatarUrl={avatarUrl}
            messageDate={messageDate}
            attachedFiles={attachedFiles}
            classRoomName={classRoomName}
            userAnswers={userAnswers}
            user={user}
            classroom={classroom}
          />
        ))
      }
    </>
  );
};

export default MessageList;