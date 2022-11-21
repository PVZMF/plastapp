import { Grid } from "@mui/material";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { containerStyles } from "./aboutUsComponentStyles";
import { rightSectionStyles } from "./rightSectionStyles";
import { leftSectionStyles } from "./leftSectionStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_api_url } from "api";
import { handleError } from "functions/handleEorro";

const AboutUsComponent = () => {
  const [aboutUsData, setAboutUsData] = useState();

  useEffect(() => {
    axios
      .get(`${base_api_url}/AboutUs/`)
      .then((res) => {
        const { data } = res;
        setAboutUsData(data.results[0]);
      })
      .catch((err) => {
        handleError(err)
      });
  }, []);

  return (
    <Grid container justifyContent="center" sx={containerStyles}>
      <Grid item sx={rightSectionStyles}>
        <RightSection />
      </Grid>
      <Grid item sx={leftSectionStyles}>
        <LeftSection aboutUsData={aboutUsData} />
      </Grid>
    </Grid>
  );
};

export default AboutUsComponent;
