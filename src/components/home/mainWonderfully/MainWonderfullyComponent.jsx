import React, { useEffect } from "react";

import { FlexMainBanner } from "./styledMainWonderfully";

import { GlobalBannerContainer } from "../../../global/styles/GlobalBannerContainer";
import basketImg from "../../../assets/imgs/basket.png";
import wonderImg from "../../../assets/imgs/wonder.png";

import MainGoToWonderfully from "../mainGoToWonderfullyDiv/mainGoToWonderfully";
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';

const MainWonderfullyComponent = ({ discount }) => {

  return (
    <Grid display={"flex"} justifyContent="center" margin={4}>
      <Grid container flexDirection={"row"} bgcolor="#EAEFE8" justifyContent={"ceneter"} alignItems={"center"} >
        <Grid item container md={4} justifyContent={"ceneter"} alignItems={"center"}>
          <Grid md={2} padding={1} sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
            <img src={basketImg} width="80%" height={"80%"} />
          </Grid>
          <Grid sx={{ flexDirection: { xs: "column-reverse", md: "row" } }} Item md={5} xs={12} display="flex" width="100%">
            <Grid md={4} xs={12} textAlign="center" alignSelf={"center"}>
              <Box width={"100%"} minWidth="80px" paddingY={1} bgcolor="#39ae00" borderRadius={2} >
                <Typography fontSize="clamp(0.5rem,3vw,1.5rem)" color="white">
                  تا %
                  <br />
                  <span> {discount} </span> تخفیف
                </Typography>
              </Box>
            </Grid>
            <Grid md={6} xs={8} alignSelf={"center"} width={"100%"}>
              <img src={wonderImg} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sx={{ margin: { xs: 2, md: 0 } }}>
          <MainGoToWonderfully />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainWonderfullyComponent;
