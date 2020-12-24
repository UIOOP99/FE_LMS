// import components
import React, {useState} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

const SendMessage = () => {

    const classes = useStyles();
    const [value, setValue] = useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <p>متن پیام</p>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                />
            </form>
        </>
    );
};

export default SendMessage;