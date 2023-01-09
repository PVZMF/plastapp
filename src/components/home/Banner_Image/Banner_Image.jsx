import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Banner_Image = ({ src, link }) => {
  return (
    <a href={link} target="_blank">
      <img src={src} alt="" width={"100%"} height={"100%"} />
    </a>
  );
};

export default Banner_Image;
