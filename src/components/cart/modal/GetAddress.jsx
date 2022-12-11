import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { setModal, setSendInfo, stepPlus } from '../../../toolkit/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../../api/api';
import { Input, InputLabel } from '@mui/material';
import { Grid } from 'swiper';


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
        const data = Object.fromEntries(form_data.entries());
        postOrder(form_data).then(res => {
            console.log(res);
        dispatch(setSendInfo(data))
        handleClose();
        dispatch(stepPlus());
        dispatch(setModal(false));
    }).catch(err => console.log(err));
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
                        <input name='city' id="addr" margin='5' />
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