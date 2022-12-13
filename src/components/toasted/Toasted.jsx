import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import {Typography} from '@mui/material'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {offToasted} from '../../toolkit/slices/toasted.slice'

const Toasted = ({ title, open, severity}) => {
    const dispatch = useDispatch();
    const toaste = useSelector((state) => state.toasted.onToasted);

    const handleClose = (reason) => {
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