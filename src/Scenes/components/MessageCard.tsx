import {
  Avatar,
  Button,
  Card,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { random } from "lodash";
import moment from "moment-jalaali";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteMessageAPI } from "services/api/message";
import { useUserState } from "services/Contexts/UserContext";
import HomeworkTable from "./HomeworkTable";

interface IFile {
  fileName: string;
  fileUrl: string;
}

interface IUserAnswer {
  userFullName: string;
  avatarUrl?: string;
  answer: string;
}

export interface IMessageCardProps {
  id: number;
  userFullName: string;
  avatarUrl?: string;
  classRoomName?: string;
  message: string;
  attachedFiles?: IFile[];
  userAnswers?: IUserAnswer[];
  messageDate: Date;
  user?: any;
  classroom?: any;
  updateMessages: () => any;
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  headerContainer: {
    marginBottom: theme.spacing(1),
  },
  contentContainer: {
    marginBottom: theme.spacing(1),
  },
  footerContainer: {},
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  moreButtonContainer: {
    display: "flex",
    alignItems: "center",
  },
  dateStringContainer: {
    display: "flex",
    alignItems: "center",
  },
  classroomNameString: {
    fontSize: "1rem",
  },
  classroomNameSelectable: {
    cursor: "pointer",
    display: "inline",
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const MessageCard = ({
  id,
  userFullName,
  avatarUrl,
  classRoomName,
  message,
  attachedFiles,
  userAnswers,
  messageDate,
  className,
  user,
  classroom,
  updateMessages,
}: { className?: string } & IMessageCardProps) => {
  const classes = useStyles();

  console.log('__st', classRoomName, classroom, userFullName, user);
  

  const { role, fullName: myFullName } = useUserState();
  const [
    moreOptionsMenuAnchor,
    setMoreOptionsMenuAnchor,
  ] = useState<HTMLElement | null>(null);

  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  const showAnswersButton = role === 'professor';

  //TODO: need a more elegant way
  const isMyOwnMessage = userFullName === myFullName;

  const history = useHistory();

  const handleUserProfileClick = () => {
    user.idNumber && history.push(`/profile/${user.idNumber}`);
  };

  const handleClassRoomClick = () => {
    const fakeClassList = [
      "کلاس طراحي شي گراي سيستم ها-۰۱",
      "کلاس اقتصاد مهندسي-۰۱",
      "کلاس مهندسي اينترنت-۰۱",
      "کلاس آزمايشگاه شبكه هاي كامپيوتري-۰۶",
    ];
    const fakeId = classroom 
      ? fakeClassList.indexOf(classRoomName as string) + 1
      : random(1, 4);
    console.log(classroom);
    
    classroom && history.push(`/lesson/${fakeId}`);
  };

  const handleAttachedFileClick = (file: IFile) => {
    return;
  };

  const handleShowAnswersClick = () => {
    setIsAnswerModalOpen(true);
    return;
  };

  const handleDeleteMessage = () => {
    deleteMessageAPI(id).then(updateMessages);
    return;
  };

  const renderHeader = (showMoreButton: boolean) => {
    return (
      <Grid
        className={classes.headerContainer}
        item
        xs={12}
        container
        spacing={2}
      >
        <Grid className={classes.avatarContainer} item>
          <IconButton onClick={handleUserProfileClick}>
            <Avatar className={classes.avatar} src={user?.avatarUrl} />
          </IconButton>
        </Grid>
        <Grid
          className={classes.infoContainer}
          item
          container
          xs
          direction="column"
        >
          <Grid item>
            <Typography variant="body2" onClick={handleUserProfileClick}>
              {userFullName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={`${classes.classroomNameString} ${
                classroom ? classes.classroomNameSelectable : ""
              }`}
              variant="h6"
              onClick={handleClassRoomClick}
            >
              {classRoomName}
            </Typography>
          </Grid>
        </Grid>
        {showMoreButton && (
          <Grid className={classes.moreButtonContainer} item>
            <IconButton
              onClick={(e) => setMoreOptionsMenuAnchor(e.currentTarget)}
            >
              <MoreHoriz />
            </IconButton>
          </Grid>
        )}
      </Grid>
    );
  };

  const renderContent = () => {
    return (
      <Grid
        className={classes.contentContainer}
        item
        xs={12}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="body1">{message}</Typography>
        </Grid>
        <Grid item container spacing={2}>
          {attachedFiles &&
            attachedFiles.map((file) => (
              <Button
                key={file.fileName}
                variant="text"
                onClick={() => handleAttachedFileClick(file)}
                color="primary"
              >
                {file.fileName}
              </Button>
            ))}
        </Grid>
      </Grid>
    );
  };

  const renderFooter = () => {
    const dateString = moment(messageDate).fromNow();
    return (
      <Grid
        className={classes.footerContainer}
        item
        xs={12}
        container
        spacing={2}
      >
        {showAnswersButton && userAnswers && (
          <Grid item>
            <Button
              variant="contained"
              disableElevation
              onClick={handleShowAnswersClick}
              color="primary"
            >
              مشاهده جواب‌ها
            </Button>
          </Grid>
        )}
        <Grid item xs />
        <Grid className={classes.dateStringContainer} item>
          <Typography variant="caption">{dateString}</Typography>
        </Grid>
      </Grid>
    );
  };

  const MenuItems = [];
  isMyOwnMessage &&
    MenuItems.push(
      <MenuItem key="delete" onClick={handleDeleteMessage}>
        حذف
      </MenuItem>
    );

  return (
    <>
      <Card className={`${className} ${classes.card}`} elevation={0}>
        <Grid container>
          {renderHeader(!!MenuItems?.length)}
          {renderContent()}
          {renderFooter()}
        </Grid>
        {
          !!MenuItems?.length &&
          <Menu
            anchorEl={moreOptionsMenuAnchor}
            open={!!moreOptionsMenuAnchor}
            onClose={() => setMoreOptionsMenuAnchor(null)}
          >
            {MenuItems}
          </Menu>
        }
      </Card>
      <Dialog open={isAnswerModalOpen} onClose={() => setIsAnswerModalOpen(false)}>
        <HomeworkTable />
      </Dialog>
    </>
  );
};

export default MessageCard;
