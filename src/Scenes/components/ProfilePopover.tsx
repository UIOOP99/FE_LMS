import React from 'react';
import { Avatar, Button, Grid, makeStyles, Popover, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import { useUserState } from 'services/Contexts/UserContext';

interface IProfilePopoverProps {
  open: boolean,
  anchorEl?: Element | null,
  onClose?: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void),
}

const useStyles = makeStyles((theme) => ({
  popoverContainer: {
    overflow: 'visible',
  },
  popover: {
    padding: theme.spacing(2),
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  arrow: {
    position: 'absolute',
    right: theme.spacing(0.5),
    top: theme.spacing(-1),
    width: '0',
    height: '0',
    borderLeft: `${theme.spacing(2)}px solid transparent`,
    borderRight: `${theme.spacing(2)}px solid transparent`,
    borderBottom: `${theme.spacing(2)}px solid ${theme.palette.background.paper}`,
    
  }
}));

const ProfilePopover = ({open, anchorEl, onClose}: IProfilePopoverProps) => {
  const classes = useStyles();

  const {fullName: userFullName, idNumber, avatarUrl} = useUserState();

  return (
    <Popover PaperProps={{className: classes.popoverContainer}} open={open} anchorEl={anchorEl} onClose={onClose} anchorOrigin={{horizontal: 'left', vertical: "bottom"}}>
      <div className={classes.arrow} />
      <Grid className={classes.popover} container spacing={2}>
        <Grid item xs container direction="column" spacing={1}>
          <Grid item>
            <Typography>
              {userFullName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {idNumber}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.avatarContainer} item>
          <Avatar className={classes.avatar} src={avatarUrl}/>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button startIcon={<EditIcon />}>پروفایل</Button>
        </Grid>
        <Grid item>
          <Button startIcon={<ExitToAppIcon />}>خروج</Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default ProfilePopover;