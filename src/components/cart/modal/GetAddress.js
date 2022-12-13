import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./getAddress.module.css";
import { provinces } from "../../../assets/citiesName/CitiesName";
//For Select MUI
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
//END SELECT IMPORT
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { containerStyles } from "../../about-us-component/aboutUsComponentStyles";
import { bgcolor, textAlign } from "@mui/system";
import { setModal, stepPlus } from "../../../toolkit/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../../api/api";
import { v4 as uuidv4 } from "uuid";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GetAddress({ open, setOpen }) {
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const handleChangeCities = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const fullData = {
      ...data,
      state: stateSelected,
      city: citySelected,
      cart_id: uuidv4(),
    };
    postOrder(fullData).then((res) => console.log(res));
    handleClose();
    dispatch(stepPlus());
    dispatch(setModal(false));
    console.log("fullData", fullData);
  };
  console.log("provinces = ", provinces);
  const [cities, setCities] = useState([""]);
  const handleCities = (e) => {
    setCities(
      provinces.filter((item) => item.name == e.target.value)[0].cities
    );
    setStateSelected(e.target.value);
  };

  return (
    <Grid
      container
      //   sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          bgcolor={"white"}
          maxWidth={700}
          margin={`auto`}
          marginTop={30}
          height={400}
        >
          <Box component={"form"} onSubmit={handleSubmit}>
            {/* <InputLabel htmlFor="addr">شهر</InputLabel>
            <Input name="city" id="addr" margin="5" />
            <InputLabel htmlFor="addr">استان</InputLabel>
            <Input name="state" id="addr" margin="5" />
            <InputLabel htmlFor="addr">آدرس</InputLabel>
            <Input name="address_text" id="addr" margin="5" />
            <InputLabel htmlFor="codePostal">کد پستی</InputLabel>
            <Input name="postal_code" id="codePostal" margin="5" />
            <InputLabel htmlFor="my-input">نام گیرنذه</InputLabel>
            <Input name="receiver_name" id="my-input" margin="5" />
            <InputLabel htmlFor="my-input"> شماره تلفن</InputLabel>
            <Input name="phone_number" id="my-input" margin="5" /> */}
            <Box
              sx={{ width: "90%", display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="nameInput">نام گیرنده </label>
              <input
                id="nameInput"
                required
                style={{ width: "100%" }}
                className={styles.input1}
                name="receiver_name"
                placeholder="نام گیرنده"
              />
            </Box>

            <Box
              sx={{
                margin: "0px",
                width: "90%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <InputLabel htmlFor="city1">شهر و استان </InputLabel>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <select
                  style={{ width: "48%" }}
                  id="city1"
                  className={styles.input1}
                  onChange={(e) => handleCities(e)}
                  name="state"
                  form="form"
                  required
                >
                  <option>انتخاب استان</option>
                  {provinces.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  style={{ width: "48%" }}
                  className={styles.input1}
                  name="city"
                  form="form"
                  required
                  onChange={(e) => {
                    setCitySelected(e.target.value);
                  }}
                >
                  <option>انتخاب شهر</option>
                  {cities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Box>
            </Box>
            <Box
              sx={{ width: "90%", display: "flex", flexDirection: "column" }}
            >
              <InputLabel htmlFor="address1">آدرس</InputLabel>
              <input
                id="address1"
                style={{ width: "100%" }}
                required
                className={styles.input1}
                name="address_text"
                placeholder="آدرس"
              />
            </Box>
            <Box
              sx={{
                margin: "0px",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ width: "90%", display: "flex", flexDirection: "column" }}
              >
                <InputLabel htmlFor="postalCode1">کد پستی</InputLabel>
                <input
                  id="postalCode1"
                  style={{ width: "96%" }}
                  required
                  className={styles.input1}
                  name="postal_code"
                  placeholder="کد پستی"
                />
              </Box>
              <Box
                sx={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <InputLabel style={{ width: "96%" }} htmlFor="phoneNumber1">
                  شماره تماس
                </InputLabel>
                <input
                  id="phoneNumber1"
                  style={{ width: "96%" }}
                  required
                  className={styles.input1}
                  name="phone_number"
                  placeholder="شماره تلفن"
                />
              </Box>
            </Box>
            <Box
              sx={{ width: "90%", display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                sx={{ width: "100px", height: "40px" }}
                type="submit"
                value={"Submit"}
                variant="contained"
              >
                ارسال
              </Button>
              <Button
                sx={{ width: "100px", height: "40px", marginRight: "20px" }}
                variant="contained"
                color="error"
                onClick={handleClose}
              >
                انصراف
              </Button>
            </Box>
          </Box>
        </Grid>
      </Modal>
    </Grid>
  );
}
=======
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
