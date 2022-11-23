import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { FlexWonderfullyImage } from "./styledMainGoToWonderfullyImgs";

import { FlexWonderfullyDiv } from "./styledMainGoToWonderfullyDiv";

import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HomeLan } from "../../../json/language/fa";
import img1 from "../../../assets/imgs/adImgs/ad1.webp";
import img2 from "../../../assets/imgs/adImgs/ad2.webp";
import { Grid, styled, Typography } from "@mui/material";
// import {
//   getAllSuggested,
//   mainSuggestedProducts,
// } from "../mainSuggested/mainSuggestedSlice";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

const MainGoToWonderfully = () => {
  //   const dispatch = useDispatch();
  //   const state = useSelector(mainSuggestedProducts);

  //   useEffect(() => {
  //     if (state.length <= 0) {
  //       dispatch(getAllSuggested(MAIN_SUGGESTED_PRODUCTS));
  //     }
  //   }, [state.length, dispatch]);
  const state = [img1, img2];
  const ImageTag = styled('img')(({ theme }) => ({
    borderRadius: "50px",
    width: "90%",
    [theme.breakpoints.up('md')]: {
      borderRadius: "50px",
      width: "100px"
    },
  }));
  return (
    <Grid display={"flex"} gap={1} justifyContent={"space-around"} alignItems={"center"}>
      <Grid container flexDirection={"row"}>
        {state.map((item, i) => {
          return (
            <Grid display={"flex"} xs={6} alignSelf={"center"} justifyContent={"center"} key={i} >
              <NavLink to={`/product/productid`}>
                <ImageTag src={item} alt="product" />
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
      <Grid Item bgcolor={"white"} padding={1} borderRadius={"10px"} sx={{ marginTop: { xs: 2, md: 0 } }} color="#3ead07">
        <NavLink to={`/product`}>
          <Typography sx={{ fontSize: { xs: "15px", md: "15px" } }} textAlign={"center"}>
            {HomeLan.mainWonderfullyDiscountProducts_title}
            <br />
            {HomeLan.mainWonderfullyDiscountProducts_title_continue}
            <ArrowBackIcon className="arrow" />
          </Typography>
        </NavLink>
      </Grid>
    </Grid >
  );
};

export default MainGoToWonderfully;
