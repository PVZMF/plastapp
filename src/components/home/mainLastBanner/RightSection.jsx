import { Box, Grid, Typography } from "@mui/material";
import { containerStyles, logoContainer } from "./rightSectionStyles";
import logo from "../../../assets/imgs/plastapp.png";

const RightSection = () => {
  return (
    <Grid
      item display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      marginRight={2}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
    >
        <Box sx={logoContainer}>
          <img src={logo} alt="logo" height="100%" />
        </Box>
        <Box margin={1} textAlign="center">
          <Typography variant="h3" color="#fff" fontSize="clamp(0.9rem, 1vw, 2rem)">
            دانلود اپلیکیشن
          </Typography>
        </Box>
    </Grid>
  );
};

export default RightSection;
