// import components
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

const HomeworkTable = () => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        container: {
            width: "90%",
            margin: "1% auto",
        },
        guide: {
            fontSize: "1.3em",
            width: "fit-content",
            margin: "1% auto",
        }
    });

    function createData(name: string, studentNumber:number, fileUploaded: string, date: string) {
        return { name, studentNumber, fileUploaded, date };
    }

    const rows = [
        createData('علی رضایی', 963613041, "rezaee.pdf", "99/7/4"),
        createData('حسین احمدی', 963613042, "ahmadi.pdf", "99/7/4"),
        createData('رضا محمدی', 963613043, "mohammadi.pdf", "99/7/5"),
        createData('امیر میری', 963613044, "miri.pdf", "99/7/2"),
        createData('شایان امینی', 963613045, "amini.pdf", "99/7/5"),
    ];

    const classes = useStyles();

    return (
        <>
            <div className={classes.guide}>لیست تکالیف ارسال شده</div>
            <TableContainer className={classes.container} component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >نام و نام خانوادگی</TableCell>
                            <TableCell >شماره دانشجویی</TableCell>
                            <TableCell >فایل ارسال شده</TableCell>
                            <TableCell >تاریخ ارسال</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell >{row.studentNumber}</TableCell>
                                <TableCell > <a href="#">{row.fileUploaded}</a></TableCell>
                                <TableCell >{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.guide}>برای دانلود تکلیف روی نام فایل کلیک کنید</div>
        </>
    );
};

export default HomeworkTable;