import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormHelperText, Grid, Input, InputLabel } from '@mui/material';
import { containerStyles } from '../../about-us-component/aboutUsComponentStyles';
import { bgcolor } from '@mui/system';
import { setModal, stepPlus } from '../../../toolkit/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../../api/api';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function GetAddress({ open, setOpen }) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);
    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form_data = new FormData(e.target);
        form_data.append("cart_id", state.idCart);
        postOrder(form_data).then(res => console.log(res));
        handleClose();
        dispatch(stepPlus());
        dispatch(setModal(false));
    };
    return (
        <Grid container>
            <Modal
                open={open}
                onClose={handleClose}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container display={"flex"} justifyContent="center" bgcolor={"white"} maxWidth={300} marginTop={10} marginRight={50}>
                    <Box component={"form"} onSubmit={handleSubmit}>
                        <InputLabel htmlFor="addr">شهر</InputLabel>
                        <Input name='city' id="addr" margin='5' />
                        <InputLabel htmlFor="addr">استان</InputLabel>
                        <Input name="state" id="addr" margin='5' />
                        <InputLabel htmlFor="addr">آدرس</InputLabel>
                        <Input name="address_text" id="addr" margin='5' />
                        <InputLabel htmlFor="codePostal">کد پستی</InputLabel>
                        <Input name='postal_code' id="codePostal" margin='5' />
                        <InputLabel htmlFor="my-input">نام گیرنذه</InputLabel>
                        <Input name='receiver_name' id="my-input" margin='5' />
                        <InputLabel htmlFor="my-input"> شماره تلفن</InputLabel>
                        <Input name="phone_number" id="my-input" margin='5' />
                        <Input type='submit' value={"Submit"} />
                    </Box>

                </Grid>
            </Modal>
        </Grid>
    );
}