import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import sample_image from "../../assets/static/logo512.png";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    position: "relative",
    margin: theme.spacing(2),
    backgroundColor: "#eeeeee",
  },
  
  avatar_container : {
    width : "20%" ,
    height : "100%" , 
    position: "absolute",
    top : 0 ,
    left : 0 
  }, 
  avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    top : "50%" ,
    transform : "translate(0,-50%)"
  },
  except_avatar: {
    width: "80%" ,
    height : "100%",
    float : "right",
  },
  title: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    width: "100%",
    wordWrap: "break-word",
    textAlign : "center"
  },
  fixed_writings: {
    float: "left",
    textAlign : "center" ,
    width : "20%",
    margin : "1% auto"
  },
  props_content: {
    width : "80%",
    float : "right",
    textAlign : "center" ,
    fontWeight: theme.typography.fontWeightBold,
    margin : "1% auto"
  },
  status :{
      width : "80%",
      float : "center",
      textAlign : "center" ,
      fontWeight: theme.typography.fontWeightBold,
      margin : "1% auto"
  }
}));
function ExamCard(props) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.avatar_container}>
        <Avatar
          className={classes.avatar}
          alt="exam image"
          src={sample_image}
        />
        </div>
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
          <Typography className={classes.status}>
            {props.ExamStatus}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

ExamCard.propTypes = {
  ExamName : PropTypes.string , 
  ExamDate : PropTypes.string , 
  ExamTime : PropTypes.string , 
  ExamStatus : PropTypes.string 
};

export default ExamCard;
