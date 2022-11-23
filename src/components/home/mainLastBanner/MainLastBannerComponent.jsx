import { Box, Grid } from "@mui/material";
// import { containerStyles, contentStyles } from "./homeDownloadAppStyles";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import { FlexMainDiv } from "./styledLastBanner";

const HomeDownloadApp = () => {
  return (
    <FlexMainDiv>
      <Grid className="container">
        <Grid container  >
          <Grid item xs={8} md={6}>
            <LeftSection />
          </Grid>
          <Grid item xs={4} md={6}>
            <RightSection />
          </Grid>
        </Grid>
      </Grid>
    </FlexMainDiv>
  );
};

export default HomeDownloadApp;
