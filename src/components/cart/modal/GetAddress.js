import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { setModal, setSendInfo, stepPlus } from '../../../toolkit/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../../api/api';
import { Grid } from '@mui/material';



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
                        <label htmlFor="addr">شهر</label>
                        <input required={true} name='city' id="addr"/>
                        <label htmlFor="addr">استان</label>
                        <input required={true} name="state" id="addr"/>
                        <label htmlFor="addr">آدرس</label>
                        <input required={true} name="address_text" id="addr"/>
                        <label htmlFor="codePostal">کد پستی</label>
                        <input required={true} name='postal_code' id="codePostal"/>
                        <label htmlFor="my-input">نام گیرنذه</label>
                        <input required={true} name='receiver_name' id="my-input"/>
                        <label htmlFor="my-input"> شماره تلفن</label>
                        <input required={true} name="phone_number" id="my-input" />
                        <input type='submit' value={"Submit"} />
                    </Box>
                </Grid>
            </Modal>
    </Grid>
    );
}