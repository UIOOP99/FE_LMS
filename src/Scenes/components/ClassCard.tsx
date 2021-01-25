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
  status?: string;
  date?: string;
  time: string;
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ClassCard = ({ title, Icon, date, status, time }: IClassCardProps) => {
  const innerStatus = (status: string) =>
    status === "active"
      ? "در حال برگزاری"
      : status === "recorded"
      ? "ضبط شده"
      : "درحال ضبط فایل";
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemIcon>
        <Avatar>
          <Icon />
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography variant="body1">{date + " " + time}</Typography>
            <Typography variant="caption">
              {innerStatus(status || "")}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ClassCard;
