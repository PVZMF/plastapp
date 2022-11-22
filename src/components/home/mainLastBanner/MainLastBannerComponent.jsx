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
          flexWrap="wrap"
          alignItems="center"
          sx={{flexDirection:{sx:"column-reverse",md:"row-reverse"}}}
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
