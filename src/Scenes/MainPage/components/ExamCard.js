import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import sample_image from "../../../assets/static/logo512.png";
import { orange } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 250,
    position: "relative",
    margin: theme.spacing(2),
    backgroundColor: "gray",
  },
  title: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    float: "center",
  },
  avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    position: "absolute",
    top : theme.spacing(4.6),
    marginRight: theme.spacing(3),
  },
  except_avatar: {
    position: "relative",
    left: theme.spacing(10),
  },
  fixed_writings: {
    float: "left",
    marginRight: theme.spacing(2),
  },
  props_content: {
    fontWeight: theme.typography.fontWeightBold,
  },
  status_content: {
    fontWeight: theme.typography.fontWeightBold,
  }
}));
function ExamCard(props) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar
          className={classes.avatar}
          alt="exam image"
          src={sample_image}
        />
        <div className={classes.except_avatar}>
          <Typography className={classes.title}>{props.ExamName}</Typography>
          <Typography className={classes.fixed_writings}>تاریخ</Typography>
          <Typography className={classes.props_content}>
            {props.ExamDate}
          </Typography>
          <Typography className={classes.fixed_writings}>زمان</Typography>
          <Typography className={classes.props_content}>
            {props.ExamTime}
          </Typography>
          <Typography className={classes.props_content}>
            {props.ExamStatus}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExamCard;
