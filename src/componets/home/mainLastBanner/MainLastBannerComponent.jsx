import { Box, Grid } from "@mui/material";
// import { containerStyles, contentStyles } from "./homeDownloadAppStyles";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import { FlexMainDiv } from "./styledLastBanner";

import { globalContainer } from "../../../global/styles/globalContainer";

const HomeDownloadApp = () => {
  return (
    <FlexMainDiv>
      <Box className="container">
        <Grid
          container
          justifyContent="space-between"
          flexDirection="row-reverse"
          flexWrap="wrap"
          alignItems="center"
          // sx={contentStyles}
        >
          <LeftSection />
          <RightSection />
        </Grid>
      </Box>
    </FlexMainDiv>
  );
};

export default HomeDownloadApp;
