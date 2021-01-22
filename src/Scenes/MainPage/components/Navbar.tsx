import {
  Avatar,
  Button,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Home, Settings } from "@material-ui/icons";
import React, { ReactElement, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import BannerNav from "Scenes/components/BannerNav";
import ProfilePopover from "../../components/ProfilePopover";

interface ILink {
  title: string;
  path: string;
  IconElement?: ReactElement;
}

const useStyles = makeStyles((theme) => ({
  navbarBanner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: theme.spacing(10),
    backgroundColor: theme.palette.grey["300"],
  },
  navbar: {
    minHeight: theme.spacing(5),
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.grey["100"],
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.appBar,
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  settingButtonContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  settingButton: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const navbarLinks: ILink[] = [
  { title: "خانه", path: "/", IconElement: <Home /> },
  { title: "گلستان", path: "https://golestan.ui.ac.ir/" },
  { title: "آزمون", path: "." },
  { title: "تغذیه", path: "." },
  { title: "کتابخانه", path: "." },
];

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory();

  const [
    profilePopoverAnchor,
    setProfilePopoverAnchor,
  ] = useState<HTMLElement | null>(null);

  const handleNavigateToLink = (path: string) => history.push('/');

  const handleSettingClick = () => {
    return;
  };

  const handleAvatarClick = (e: SyntheticEvent<HTMLElement>) => {
    setProfilePopoverAnchor(e.currentTarget);
  };

  const renderLink = (link: ILink) => {
    const IconElement = link.IconElement || null;
    return (
      <Grid className={classes.linkContainer} key={link.title} item>
        <Button
          disableElevation
          size="large"
          variant="text"
          {...(IconElement && { startIcon: IconElement })}
          onClick={() => handleNavigateToLink(link.path)}
        >
          {link.title}
        </Button>
      </Grid>
    );
  };

  const renderNavbarBannerImage = () => {
    return <BannerNav />;
  };
  const renderNavbar = () => {
    return (
      <Grid className={classes.navbar} container>
        {navbarLinks.map(renderLink)}

        <Grid item xs />

        <Grid className={classes.settingButtonContainer} item>
          <IconButton onClick={handleSettingClick}>
            <Settings className={classes.settingButton} />
          </IconButton>
        </Grid>
        <Grid className={classes.avatarContainer} item>
          <IconButton onClick={handleAvatarClick}>
            <Avatar className={classes.avatar} src="avatar" />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {renderNavbarBannerImage()}
      {renderNavbar()}
      <ProfilePopover
        open={!!profilePopoverAnchor}
        anchorEl={profilePopoverAnchor}
        onClose={() => setProfilePopoverAnchor(null)}
      />
    </>
  );
};

export default Navbar;
