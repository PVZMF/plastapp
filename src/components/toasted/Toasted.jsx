import React, { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import {Typography} from '@mui/material'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {offToasted, toggleIsChangePassword, toggleIsCreateAccount} from '../../toolkit/slices/auth'

const Toasted = ({ title, open, severity}) => {
    const dispatch = useDispatch();
    const toaste = useSelector((state) => state.auth.onToasted);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(offToasted());
    }
    return (
        <Snackbar  open={open && toaste} onClose={handleClose} autoHideDuration={3000}>
            <Alert variant="filled" severity={severity}>
                <Typography fontSize={14}>
                    {title}
                </Typography>
            </Alert>
        </Snackbar>
    )
}

export default Toasted