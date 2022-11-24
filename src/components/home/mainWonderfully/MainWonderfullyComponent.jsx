import React from "react";

import img1 from "../../../assets/imgs/adImgs/ad1.webp";
import img2 from "../../../assets/imgs/adImgs/ad2.webp";
import basketImg from "../../../assets/imgs/basket.png";
import wonderImg from "../../../assets/imgs/wonder.png";
import { HomeLan } from "../../../json/language/fa";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography, styled } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";

const MainWonderfullyComponent = ({ discount }) => {
  const state = [img1, img2]
  const ImageTag = styled('img')(({ theme }) => ({
    borderRadius: "50px",
    width: "90%",
    [theme.breakpoints.up('md')]: {
      borderRadius: "50px",
      width: "100px"
    },
  }));
  return (
    <Grid display={"flex"} justifyContent="center" margin={4}>
      <Grid container flexDirection={"row"} bgcolor="#EAEFE8" justifyContent={"ceneter"} alignItems={"center"} >
        <Grid
          item
          container
          xs={12} md={6}
          justifyContent={"space-around"}
          alignItems={"center"}>
          <Grid md={2} padding={1} sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
            <img src={basketImg} width="80%" height={"80%"} />
          </Grid>
          <Grid sx={{ flexDirection: { xs: "column-reverse", md: "row" } }} Item gap={2} md={8} xs={12} display="flex" width="100%">
            <Grid md={4} xs={12} textAlign="center" alignSelf={"center"}>
              <Box width={"100%"} minWidth="80px" paddingY={1} bgcolor="#39ae00" borderRadius={2} >
                <Typography fontSize="clamp(0.5rem,3vw,1.5rem)" color="white">
                  تا %
                  <br />
                  <span> {discount} </span> تخفیف
                </Typography>
              </Box>
            </Grid>
            <Grid md={8} xs={6} alignSelf={"center"} width={"100%"}>
              <img src={wonderImg} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12} md={6}
          // spacing={1}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ flexDirection: { xs: "column", md: "row" }, margin: { xs: 2, md: 0 } }}
        >
          <Grid 
          Item 
          md={4} 
          display={"flex"} 
          flexDirection={"row"} 
          alignItems={"center"} 
          justifyContent={"center"} 
          sx={{gap:{md:"30px"}}}>
            {state.map((item, i) => {
              return (
                <Box key={i} >
                  <Link to={`/product/productid`}>
                    <ImageTag src={item} alt="product" />
                  </Link>
                </Box>
              );
            })}
          </Grid>
          <Grid Item md={4} bgcolor={"white"} padding={1} borderRadius={"10px"} margin={2} color="#3ead07">
            <Link to={`/product`}>
              <Typography fontSize="clamp(0.5rem,3vw,1.5rem)" textAlign={"center"}>
                {HomeLan.mainWonderfullyDiscountProducts_title}
                <br />
                {HomeLan.mainWonderfullyDiscountProducts_title_continue}
                <ArrowBackIcon className="arrow" />
              </Typography>
            </Link>
          </Grid>
        </Grid >
      </Grid>
    </Grid>
  );
};

export default MainWonderfullyComponent;
