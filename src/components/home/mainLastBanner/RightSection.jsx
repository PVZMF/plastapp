import { Box, Grid, Typography } from "@mui/material";
import { containerStyles, logoContainer } from "./rightSectionStyles";
import logo from "../../../assets/imgs/plastapp.png";

const RightSection = () => {
  return (
    <Grid 
    item display={"flex"} 
    alignSelf="center" 
    justifyContent={"center"} 
    alignItems={"center"}
    height={"100%"} 
    sx={{flexDirection:{xs:"column", lg:"row"}}} 
    gap={2}
    >
      <Box sx={logoContainer} >
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <Box minWidth={"50px"} textAlign="center">
        <Typography variant="h3" color="#fff" fontSize="clamp(0.5rem, 2vw, 1rem)">
          دانلود اپلیکیشن
        </Typography>
      </Box>
    </Grid>
  );
};

export default RightSection;
