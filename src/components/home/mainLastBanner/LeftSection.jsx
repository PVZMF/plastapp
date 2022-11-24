import { Grid } from "@mui/material";

import { containerStyles, downloadsContainerStyles } from "./leftSectionstyles";

import sibche from "../../../assets/imgs/lastBannerImgs/get-from-sibche.webp";
import anardooni from "../../../assets/imgs/lastBannerImgs/get-from-anardooni.webp";
import google_play from "../../../assets/imgs/lastBannerImgs/get-from-google-play.webp";
import sib_app from "../../../assets/imgs/lastBannerImgs/get-from-sib-app.webp";
import baazar from "../../../assets/imgs/lastBannerImgs/get-from-baazar.webp";

const LeftSection = () => {
  return (
      <Grid container spacing={1} justifyContent={"center"} justifyItems={"center"}>
        <Grid item xs={4} md={2}>
          <img src={sibche} alt="get-from-googleplay" height="100%" />
        </Grid>
        <Grid item xs={4} md={2}>
          <img src={anardooni} alt="get-from-appstore" height="100%" />
        </Grid>
        <Grid item xs={4} md={2}>
          <img src={google_play} alt="get-from-bazaar" height="100%" />
        </Grid>
        <Grid item xs={4} md={2}>
          <img src={sib_app} alt="get-from-mykey" height="100%" />
        </Grid>
        <Grid item xs={4} md={2}>
          <img src={baazar} alt="get-from-sibche" height="100%" />
        </Grid>
    </Grid>
  );
};

export default LeftSection;
