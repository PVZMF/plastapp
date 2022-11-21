import React, { useEffect } from "react";

import { FlexMainBanner } from "./styledMainWonderfully";

import { GlobalBannerContainer } from "../../../global/styles/GlobalBannerContainer";
import basketImg from "../../../assets/imgs/basket.png";
import wonderImg from "../../../assets/imgs/wonder.png";

import MainGoToWonderfully from "../mainGoToWonderfullyDiv/mainGoToWonderfully";
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';

const MainWonderfullyComponent = ({ discount }) => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainBanner);
  // const status = useSelector(BannerStatus);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getAllBannerImg(MAIN_BANNERS));
  //   }
  // }, [state.length, dispatch]);

  // const state = [img1, img2];
  return (
    <Grid container justifyContent="center" marginTop={8} margin={1}>
      <Grid container bgcolor="#EAEFE8" maxWidth="75%" justifyContent={"space-between"} alignItems={"center"}>
        <Grid md={1} padding={1} sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
          <img src={basketImg} width="80%" height={"80%"}/>
        </Grid>
        <Grid Item md={4} xs={12} display="flex" marginRight={2}>
          <Grid md={6} xs={2} textAlign="center" alignSelf={"center"}>
            <Box width={"60%"} minWidth="80px" paddingY={1} bgcolor="#39ae00" borderRadius={2} >
              <Typography sx={{fontSize:{xs:"10px",md:"15px"}}} color ="white">
                تا %
                <br />
                <span> {discount} </span> تخفیف
              </Typography>
            </Box>
          </Grid>
          <Grid  md={6} xs={6}>
            <img src={wonderImg} />
          </Grid>
        </Grid>
        <Grid margin={2}>
          <MainGoToWonderfully />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainWonderfullyComponent;
