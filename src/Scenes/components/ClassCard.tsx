import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

interface IClassCardProps {
  id: number;
  title: string;
  Icon?: any;
  active?: boolean;
  primaryDesc?: string;
  secondaryDesc?: string;
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ClassCard = ({
  title,
  Icon,
  primaryDesc,
  secondaryDesc,
  active,
}: IClassCardProps) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemIcon>
        <Avatar classes={{ root: active ? classes.root : "" }}>
          <Icon />
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography variant="body1">{primaryDesc}</Typography>
            <Typography variant="caption">{secondaryDesc}</Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ClassCard;
