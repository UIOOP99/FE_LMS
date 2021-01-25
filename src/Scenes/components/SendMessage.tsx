// import components
import React, {useState, useRef, useEffect} from "react";
import { useUserState } from 'services/Contexts/UserContext';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Avatar, Card, Grid, IconButton } from "@material-ui/core";
import { AccountBalance, ArrowBackIos, CloudUpload } from "@material-ui/icons";
import useSWR from "swr";
import { classroomInfoFetcher, classroomInfoKey } from "services/api/lesson";
import { createMessageAPI } from "services/api/message";

// style of components
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: theme.spacing(2),
        },
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        row: {
            width: '100%',
            display: 'flex',
        },
        formControl: {
            // margin: theme.spacing(1),
            // marginRight: theme.spacing(4),
            minWidth: theme.spacing(15),
        },
        spanOfFileName : {
            fontSize: '0.8rem',
            margin: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
        },
        chooseClass : {
            marginLeft: 'auto',
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        chooseFile : {
            position: 'absolute',
            opacity : 0,
            maxWidth: theme.spacing(6)
        },
        submitBtn : {
            // margin: theme.spacing(1),
            // padding : theme.spacing(1),
            // paddingLeft: theme.spacing(4),
            // paddingRight: theme.spacing(4),
        },
        alert : {
            width: '100%',
            // '& > * + *': {
            //     marginTop: theme.spacing(2),
            // },
            margin: theme.spacing(1),
        },
        gridItemCenter: {
            display: 'flex',
            alignItems: 'center',
        },
        avatar: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
        textfieldContainer: {
            paddingRight: theme.spacing(1),
        },
        classIconContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: theme.spacing(8),
        },
        classIcon: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            color: theme.palette.primary.dark,
        }
    }),
);

const SendMessage = ({classroomId, updateMessages}: {classroomId?: string, updateMessages: ()=>any}) => {

    const {id, fullName, avatarUrl} = useUserState();
    const classes = useStyles();

    // handler and state of text area component
    console.log('__', classroomId);
    
    const { data: classroomInfo } = useSWR([classroomInfoKey, classroomId], classroomInfoFetcher);
    const [textValue, setTextValue] = useState('');
    const handleChangeTextArea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    };

    // handler and state of select class component
    const [classState, setClassState] = useState('');

    useEffect(() => {
        setClassState(classroomInfo?.name || '');
    }, [classroomInfo]);

    const handleChangeClass = (event: React.ChangeEvent<{ value: unknown }>) => {
        let classChosen: string = event.target.value as string;
        setClassState(classChosen);
    };

    // get list of class from backEnd
    const listOfClass = () => {
        let classList = [];

        // request for get list of classes that this user member of that
        // axiosInstance.post("/classlist", userIdNumber).then( res =>{
        //     classList = res.classes;
        // })
        //     .catch(error => {
        //         alert(error);
        //     });

        classList = [
            "کلاس طراحي شي گراي سيستم ها-۰۱",
            "کلاس اقتصاد مهندسي-۰۱",
            "کلاس مهندسي اينترنت-۰۱",
            "کلاس آزمايشگاه شبكه هاي كامپيوتري-۰۶",
          ];
        return (
            classList.map( (className) => <MenuItem value={className}>{className}</MenuItem>)
        );
    };


    const fileInput = useRef(null);
    const [fileState, setFileState] = useState({
        visibilityFileButton: false,
        hasFile: false,
        fileName: "",
    });
    // define component for select file
    const ChooseFile = () => {
        if (fileState.visibilityFileButton){
            return (
                <Grid className={classes.gridItemCenter} item>
                    <IconButton>
                        <input className={classes.chooseFile} type="file" onChange={handleSelectFile} ref={fileInput}/>
                        <CloudUpload />
                    </IconButton>
                    {showFileName()}
                </Grid>
            );
        }
        return null;
    };

    // this function for show a span include file name
    const showFileName = () => {
        return fileState.hasFile ? <span className={classes.spanOfFileName}>فایل انتخاب شده: <b>{fileState.fileName}</b></span> : null;
    };

    // this function call when attacked file selected
    const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {

        // this if for check that file is selected
        if (event.target.files![0] !== undefined){
            setFileState((prevState) => ({
                    ...prevState,
                    hasFile: true,
                    fileName: event.target.files![0].name,
                })
            );
        }

    };


    const [typeOfMessageState, setTypeOfMessageState] = useState('');
    const handleChangeSelectType = (event: React.ChangeEvent<{ value: unknown }>) => {
        let typeChosen: string = event.target.value as string;
        setTypeOfMessageState(typeChosen);

        if ( typeChosen === 'homeWork' ){
            setFileState((prevState) => ({
                    ...prevState,
                    visibilityFileButton: true,
                })
            );
        }
        else {
            setFileState((prevState) => ({
                    ...prevState,
                    visibilityFileButton: false,
                })
            );
        }
    };

    const submitForm = (event: React.FormEvent) => {

        event.preventDefault();

        if ( classState === '' ){
            setAlertState({
                showAlert: true,
                alertText: 'لطفا یک کلاس برای ارسال پیام انتخاب کنید.',
                isError: true
            });
        }
        else if (typeOfMessageState === ''){
            setAlertState({
                showAlert: true,
                alertText: 'لطفا نوع پیام را مشخص کنید.',
                isError: true
            });
        }
        else {

            // @ts-ignore
            // const [attachedFile] = fileInput.current.files;
            // let fileData = new FormData();
            // fileData.append('file-homeWork', attachedFile);
            // let message = {
            //     idSender : userIdNumber,
            //     messageType : typeOfMessageState,
            //     messageText : textValue,
            //     messageClass : classState,
            //     hasFile : fileState.hasFile,
            //     file : fileData
            // };
            
            const message = {
                userId : id,
                userFullName: fullName,
                classRoomName: classState,
                message: textValue,
                messageDate: new Date(),
                messageType: 'message',
            };

            createMessageAPI(message).then(updateMessages);


            //send message for backEnd
            // axiosInstance.post("/sendMessage", message).then( res =>{
            //     if (res.status=== 'ack') {
            //         setAlertState({
            //             showAlert: true,
            //             alertText: 'پیام شما با موفقیت ثبت شد.',
            //             isError: false
            //         });
            // })
            //     .catch(error => {
            //         alert(error);
            //     });
            setAlertState({
                showAlert: true,
                alertText: 'پیام شما با موفقیت ثبت شد.',
                isError: false
            });

            // reset states
            setTimeout(() => {
                setTextValue('');
                setTypeOfMessageState('');
                setClassState('');
                setFileState({
                    visibilityFileButton: false,
                    hasFile: false,
                    fileName: "",
                });
                setAlertState({
                    showAlert: false,
                    alertText: '',
                    isError: false
                });
            }, 500);
        }
    };

    const [alertState, setAlertState] = useState({
        showAlert: false,
        alertText: '',
        isError: false
    });
    const showAlert = () => {
        if (alertState.showAlert){
            if (alertState.isError){
                return (
                    <Alert className={classes.alert} variant="filled" severity="error">
                        {alertState.alertText}
                    </Alert>
                );
            }
            else {
                return (
                    <Alert className={classes.alert} variant="filled" severity="success">
                        {alertState.alertText}
                    </Alert>
                );
            }
        }
        return null;
    };

    return (
        <Card className={classes.container} elevation={0}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitForm}>
                <Grid className={classes.textfieldContainer} container spacing={2}>
                    <Grid className={classes.gridItemCenter} item>
                        <Avatar className={classes.avatar} src={avatarUrl}/>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="outlined-multiline-static"
                            label="متن پیام"
                            multiline
                            size="small"
                            rows={2}
                            variant="outlined"
                            value={textValue}
                            onChange={handleChangeTextArea}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid className={classes.classIconContainer} item >
                        <AccountBalance className={classes.classIcon} />
                    </Grid>
                    <Grid className={classes.gridItemCenter} item>
                        <FormControl variant="outlined" className={classes.formControl}>
                            {/* <InputLabel id="demo-simple-select-outlined-label">انتخاب کلاس</InputLabel> */}
                            {
                                !!classroomId ?
                                <TextField 
                                    value={classroomInfo?.name}
                                    disabled={!!classroomId} 
                                    variant="outlined"      
                                    size="small"                     
                                />
                                :
                                <TextField
                                    // labelId="demo-simple-select-outlined-label"
                                    select
                                    id="demo-simple-select-outlined"
                                    value={classState}
                                    onChange={handleChangeClass}
                                    variant="outlined"
                                    size="small"
                                    label="انتخاب کلاس"
                                >
                                    {listOfClass()}
                                </TextField>
                            }
                        </FormControl>
                    </Grid>
                    <Grid className={classes.gridItemCenter} item>
                        <FormControl variant="outlined" className={classes.formControl}>
                            {/* <InputLabel id="demo-simple-select-outlined-label">نوع پیام</InputLabel> */}
                            <TextField
                                // labelId="demo-simple-select-outlined-label"
                                select
                                id="demo-simple-select-outlined"
                                value={typeOfMessageState}
                                onChange={handleChangeSelectType}
                                variant="outlined"
                                size="small"
                                label="نوع پیام"
                            >
                                <MenuItem value="usual">عادی</MenuItem>
                                <MenuItem value="homeWork">تکلیف</MenuItem>
                            </TextField>
                        </FormControl>
                    </Grid>
                    {ChooseFile()}
                    <Grid item xs/>
                    <Grid className={classes.gridItemCenter} item>
                        <Button 
                        className={classes.submitBtn} 
                        endIcon={<ArrowBackIos />}
                        disableElevation 
                        color="primary" 
                        variant="contained" 
                        type="submit"
                    >
                            ارسال
                        </Button>
                    </Grid>                        
                </Grid>                    
                <Grid container>
                    {showAlert()}
                </Grid>
            </form>
        </Card>
    );
};

export default SendMessage;