import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

interface IExamCardProps {
  title: string;
  date: string;
  icon?: any;
  time: string;
  status: string;
  //   primaryDesc?: string;
  //   secondaryDesc?: string;
}

//   title: (i: number) => ["آزمون ۱", "آزمون 2", "آزمون ۴", "آزمون ۳"][i % 2],
//   date: (i: number) =>
//     [" ۵ آذر", " ۱۸ آذر", "۲۵ دی", " ۳۰ مهر", " ۱۵ آبان"][i % 2],
//   time: (i: number) =>
//     ["۲۰ دقیقه", "۲۰ دقیقه", "۳۰ دقیقه", "۷۰ دقیقه", "۷۰ دقیقه", "۶۰ دقیقه"][
//       i % 2
//     ],
//   status: (i: number) => ["شروع نشده", "شروع نشده"][i % 2],
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}));
export const ExamCard = ({
  title,
  date,
  icon: Icon,
  time,
  status,
}: IExamCardProps) => {
  const classes = useStyles();
  const persianStatus = status === "active" ? "شروع شده" : "شروع نشده";
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemIcon>
        <Avatar classes={{ root: status === "active" ? classes.root : "" }}>
          {/* <Icon /> */}
          {Icon}
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography variant="body1">{date + " " + time}</Typography>
            <Typography variant="body2">{persianStatus}</Typography>
            {/* <Typography variant="caption">{status}</Typography> */}
            {/* <Typography variant="caption">{status}</Typography> */}
          </>
        }
      />
    </ListItem>
  );
};
export default ExamCard;
