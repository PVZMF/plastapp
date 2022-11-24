import { Box, Grid } from "@mui/material";
// import { containerStyles, contentStyles } from "./homeDownloadAppStyles";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import { FlexMainDiv } from "./styledLastBanner";

const HomeDownloadApp = () => {
  return (
    <FlexMainDiv>
      <Grid className="container">
        <Grid container alignItems={"center"} justifyContent={"center"} >
          <Grid item xs={12} md={2}>
            <RightSection />
          </Grid>
          <Grid item xs={10} md={10}>
            <LeftSection />
          </Grid>

        </Grid>
      </Grid>
    </FlexMainDiv>
  );
};

export default HomeDownloadApp;
