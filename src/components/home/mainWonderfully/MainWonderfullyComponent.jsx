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
    <Grid display={"flex"} justifyContent="center" marginTop={4}>
      <Grid container flexDirection={"row"} bgcolor="#EAEFE8"  alignItems={"center"} >
        <Grid item container md={6} justifyContent={"ceneter"} alignItems={"center"}>
          <Grid md={1} padding={1} sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
            <img src={basketImg} width="80%" height={"80%"} />
          </Grid>
          <Grid sx={{flexDirection:{xs:"column-reverse",md:"row"}}} Item md={5} xs={12} display="flex" marginLeft={2} width="100%">
            <Grid md={4} xs={2} textAlign="center" alignSelf={"center"}>
              <Box width={"60%"} minWidth="80px" paddingY={1} bgcolor="#39ae00" borderRadius={2} >
                <Typography fontSize="clamp(0.5rem,3vw,1.5rem)" color="white">
                  تا %
                  <br />
                  <span> {discount} </span> تخفیف
                </Typography>
              </Box>
            </Grid>
            <Grid md={8} xs={4} alignSelf={"center"} width={"100%"}>
              <img src={wonderImg} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} margin={2}>
          <MainGoToWonderfully />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainWonderfullyComponent;
