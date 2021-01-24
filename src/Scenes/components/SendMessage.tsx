// import components
import React, {useState, useRef} from "react";
import { axiosInstance } from "services/axios/axios";
import { useUserState } from 'services/Contexts/UserContext';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Card } from "@material-ui/core";

// style of components
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100%',
            margin: theme.spacing(1, 'auto'),


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
            margin: theme.spacing(1),
            marginRight: theme.spacing(4),
            minWidth: 120,
        },
        chooseButton: {
            margin: theme.spacing(1),
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
            opacity : 0
        },
        submitBtn : {
            margin: theme.spacing(1),
            padding : theme.spacing(1),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        alert : {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            margin: theme.spacing(1),
        }
    }),
);

const SendMessage = () => {

    const {idNumber: userIdNumber} = useUserState();
    const classes = useStyles();

    // handler and state of text area component
    const [textValue, setTextValue] = useState('');
    const handleChangeTextArea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    };

    // handler and state of select class component
    const [classState, setClassState] = useState('');
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

        classList = ["طراحی شی گرا", "سیگنال و سیستم", "مهندسی اینترنت", "رایانش امن"];
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
                <>
                    <Button className={classes.chooseButton} variant="outlined">
                        انتخاب فایل پیوست
                        <input className={classes.chooseFile} type="file" onChange={handleSelectFile} ref={fileInput}/>
                    </Button>
                    {showFileName()}
                </>
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
            const attachedFile = fileInput.current.files[0];
            let fileData = new FormData();
            fileData.append('file-homeWork', attachedFile);
            let message = {
                idSender : userIdNumber,
                messageType : typeOfMessageState,
                messageText : textValue,
                messageClass : classState,
                hasFile : fileState.hasFile,
                file : fileData
            };

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
                    <Alert variant="filled" severity="error">
                        {alertState.alertText}
                    </Alert>
                );
            }
            else {
                return (
                    <Alert variant="filled" severity="success">
                        {alertState.alertText}
                    </Alert>
                );
            }
        }
        return null;
    };

    return (
        <Card elevation={0} className={classes.container}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitForm}>
                <div className={classes.row}>
                    <TextField
                        id="outlined-multiline-static"
                        label="متن پیام"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={textValue}
                        onChange={handleChangeTextArea}
                    />
                </div>
                <div className={classes.row}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">انتخاب کلاس</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={classState}
                            onChange={handleChangeClass}
                            label="انتخاب کلاس"
                        >
                            {listOfClass()}
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">نوع پیام</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={typeOfMessageState}
                            onChange={handleChangeSelectType}
                            label="نوع پیام"
                        >
                            <MenuItem value="usual">عادی</MenuItem>
                            <MenuItem value="homeWork">تکلیف</MenuItem>
                        </Select>
                    </FormControl>
                    {ChooseFile()}
                </div>
                <div className={classes.row}>
                    <Button className={classes.submitBtn} color="primary" size="large" variant="contained" type="submit">
                        تأیید
                    </Button>
                    <div className={classes.alert}>
                        {showAlert()}
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default SendMessage;