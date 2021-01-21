import React from 'react';
import { Avatar, Card, CardActionArea, Grid, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export interface IUserCardProps {
  userFullName: string,
  avatarUrl?: string,
  idNumber?: string,
  showIdNumber?: boolean,
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    // backgroundColor: theme.palette.grey['100'],
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

const UserCard = ({userFullName, avatarUrl, idNumber, showIdNumber = false}: IUserCardProps) => {
  const classes = useStyles();
  const history = useHistory();

  const handleUserProfileClick = () => idNumber && history.push(`/profile/${idNumber}`);
  
  return (
    <Card elevation={0}>
      <CardActionArea className={classes.card} onClick={handleUserProfileClick}>
        <Grid container spacing={2}>
          <Grid className={classes.avatarContainer} item>
              <Avatar className={classes.avatar} src={avatarUrl}/>
          </Grid>
          <Grid item container xs direction="column" justify="center">
            <Grid item >
              <Typography variant="body1">
                {userFullName}
              </Typography>
            </Grid>
            {showIdNumber && (<Grid item >
              <Typography variant="caption">
                {idNumber}
              </Typography>
            </Grid>)}
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;