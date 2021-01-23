import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { makeStyles, Grid, Card, Typography, ButtonBase } from '@material-ui/core';

import { profileFetcher, profileKey } from 'services/api/user';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
  },
  
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    
  },
  text: {
    padding: theme.spacing(1),

  }
}));

export default function ProfileCard() {
  const classes = useStyles();
  const { id: userId } = useParams();

  // const { data: { avatarUrl, fullName, username, idNumber, role } } = useSWR([profileKey, userId], profileFetcher);
  const { avatarUrl, fullName, username, idNumber, role } = mockedData;

  return (
    <div className={classes.root}>
      <Card className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={avatarUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography className={classes.text} variant="body1" gutterBottom>
                نام و نام خانوادگی:  {fullName}
                </Typography>
                <Typography className={classes.text} gutterBottom variant="body1">
                نام کاربری:  {username}
                </Typography>
                <Typography className={classes.text} gutterBottom variant="body1">
                  شماره کاربری:  {idNumber}
                </Typography>
                <Typography className={classes.text} gutterBottom variant="body1">
                  سطح کاربری:  {role}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

const mockedData = {
  avatarUrl:'http://lms.ui.ac.ir/publicnew/user/8f/9d/04/494f6_497c.jpg?c=d111',
  fullName:'امیر مهدی',
  username:'amirmahdi' ,
  idNumber: '963613048',
  role: 'دانشجو',
};
