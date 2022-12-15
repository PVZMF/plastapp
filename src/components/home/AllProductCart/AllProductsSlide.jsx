import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AllProductsSlide = ({ link }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100%"
      textAlign={"center"}
      className=""
    >
      <Link to={link}>
        <Typography
          variant="h3"
          color="#1976d2"
          fontSize={"clamp(0.5rem,3vw,2rem)"}
        >
          نمایش تمام محصولات
        </Typography>
      </Link>
    </Box>
  );
};

export default AllProductsSlide;
