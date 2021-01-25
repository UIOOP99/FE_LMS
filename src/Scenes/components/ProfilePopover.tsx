import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { useHistory } from "react-router-dom";
import { wait } from "Scenes/LoginPage";
import { useUserDispatch, useUserState } from "services/Contexts/UserContext";
import { EUserActionTypes } from "services/Contexts/UserContext/models";

interface IProfilePopoverProps {
  open: boolean;
  anchorEl?: Element | null;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

const useStyles = makeStyles((theme) => ({
  popoverContainer: {
    overflow: "visible",
  },
  popover: {
    padding: theme.spacing(2),
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  arrow: {
    position: "absolute",
    right: theme.spacing(0.5),
    top: theme.spacing(-1),
    width: "0",
    height: "0",
    borderLeft: `${theme.spacing(2)}px solid transparent`,
    borderRight: `${theme.spacing(2)}px solid transparent`,
    borderBottom: `${theme.spacing(2)}px solid ${
      theme.palette.background.paper
    }`,
  },
}));

const ProfilePopover = ({ open, anchorEl, onClose }: IProfilePopoverProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { fullName: userFullName, idNumber, avatarUrl } = useUserState();
  const userDispatch = useUserDispatch();

  const handleProfileButtonOnClick = () =>
    idNumber && history.push(`/profile/${idNumber}`);

  return (
    <Popover
      PaperProps={{ className: classes.popoverContainer }}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <div className={classes.arrow} />
      <Grid className={classes.popover} container spacing={2}>
        <Grid item xs container direction="column" spacing={1}>
          <Grid item>
            <Typography>{userFullName}</Typography>
          </Grid>
          <Grid item>
            <Typography>{idNumber}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.avatarContainer} item>
          <Avatar className={classes.avatar} src={avatarUrl} />
        </Grid>
      </Grid>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            onClick={handleProfileButtonOnClick}
            startIcon={<AccountCircle />}
            color="primary"
          >
            پروفایل
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={async () => {
              userDispatch({ type: EUserActionTypes.LOGOUT });
              await wait(500);
              history.push("/login");
            }}
            startIcon={<ExitToAppIcon />}
            color="primary"
          >
            خروج
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default ProfilePopover;
