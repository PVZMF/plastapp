import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../api/api";
import AboutUs from "../../components/aboutus";

const AboutUsPage = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    getAboutUs()
      .then((results) => {
        setAboutUs(results.data);
      })
      .catch((error) => {
       
      });
  }, []);

  return (
    <>
      <AboutUs imageUrl={aboutUs.image} description={aboutUs.description} />
    </>
  );
};

export default AboutUsPage;
