import { Box, Grid, Typography } from "@mui/material";
import { containerStyles, logoContainer } from "./rightSectionStyles";
import logo from "../../../assets/imgs/plastapp.png";

const RightSection = () => {
  return (
    <Grid item sx={containerStyles}>
      <Box sx={logoContainer}>
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <Typography variant="h5" component="h3" color="#fff">
        دانلود اپلیکیشن
      </Typography>
    </Grid>
  );
};

export default RightSection;
