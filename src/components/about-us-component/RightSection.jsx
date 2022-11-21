import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { imgContainer } from "./rightSectionStyles";

const RightSection = () => {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    setBgUrl("./assets/main-backgrounds/aboutus-banner.jpg");
  }, []);

  return (
    <>
      <Box
        sx={{
          background: `url(${bgUrl}) !important`,
          ...imgContainer,
        }}
      />
    </>
  );
};

export default RightSection;
