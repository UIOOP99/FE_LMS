import React from 'react';
import { Avatar, Card, CardActionArea, Grid, makeStyles, Typography } from '@material-ui/core';

export interface IUserCardProps {
  userFullName: string,
  userAvatar?: string,
  identificationNumber?: string,
  showIdNumber?: boolean,
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  }
}));

const UserCard = ({userFullName, userAvatar, identificationNumber, showIdNumber = false}: IUserCardProps) => {
  const classes = useStyles();
  const handleUserProfileClick = () => {
    return;
  };

  return (
    <Card elevation={0}>
      <CardActionArea className={classes.card} onClick={handleUserProfileClick}>
        <Grid container spacing={2}>
          <Grid className={classes.avatarContainer} item>
              <Avatar className={classes.avatar} src={userAvatar}/>
          </Grid>
          <Grid item container xs direction="column" justify="center">
            <Grid item >
              <Typography variant="body1">
                {userFullName}
              </Typography>
            </Grid>
            {showIdNumber && (<Grid item >
              <Typography variant="caption">
                {identificationNumber}
              </Typography>
            </Grid>)}
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;