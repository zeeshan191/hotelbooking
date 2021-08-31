/*eslint-disable*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Title from '../components/Title';
import { useState, useEffect } from 'react'


const useStyles = makeStyles({

    root: {
        width: '70%',
        marginLeft: "15%",
        marginTop: "3%",
        backgroundColor: "#f2ecec",
        borderLeft: 'outset',
        borderTop: 'outset',
    },

    container: {
        maxHeight: 440,
        borderRightColor: 'red',
    },
});



export default function MatPaginationTable() {
    const classes = useStyles();
    // const [page, setPage] = React.useState(0);
    // const [data, setData] = useState([]);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [commentsData, setComments] = useState([]);
    const [test, setTest] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 10);
    }, [test]);

    const getData = () => {
        axios
            .post("http://entemadb.entema-software.com/getHotelBookingOnEmail", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  },

                email: localStorage.getItem("userDetails")
            })
            .then((res) => {
                console.log(res.data);
                setComments(res.data);
                //setState(onSubmitTemplate);
                //redirectToHome();
            });
    };

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };



    // const handleChangeRowsPerPage = event => {
    //     setRowsPerPage(+event.target.value);

    //     setPage(0);

    // };



    return (<>
        <div className="container">
            <section className="featured-rooms">
                <Title title="My Bookings" />

                <Paper className={classes.root}>

                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>

                                    <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>Full Name</TableCell>
                                    <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>Room Type</TableCell>
                                    <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>Phone Number</TableCell>
                                    <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>E-Mail</TableCell>
                                    <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>Check In</TableCell>
                                    <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>Check Out</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {commentsData.map((comments) => (
                                    <TableRow >

                                        <TableCell align="center"> {comments.BOOK_FNAME}</TableCell>
                                        <TableCell align="center">{comments.BOOK_ROOM_TYPE}</TableCell>
                                        <TableCell align="center">{comments.BOOK_PHONE}</TableCell>
                                        <TableCell align="center">{comments.BOOK_EMAIL}</TableCell>
                                        <TableCell align="center">{comments.BOOK_CHECKIN}</TableCell>
                                        <TableCell align="center">{comments.BOOK_CHECKOUT}</TableCell>
                                           
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </section>
    </div>
    </>
    );
}