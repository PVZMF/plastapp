// Modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import { getCategories } from "../../../api/api";
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { HomeLan } from "../../../json/language/fa";

import { FlexMainCateogry } from "./styledMainCategory";
// import SkeltonLoader from "../../../components/skeletonLoader/SkeltonLoader";

// images
// import Logo1 from '../../../assets/imgs/1.webp';
// import Logo2 from '../../../assets/imgs/2.webp';
// import Logo3 from '../../../assets/imgs/3.webp';
// import Logo4 from '../../../assets/imgs/4.webp';

// import SkeltonLoader from "../../../components/skeletonLoader/SkeltonLoader";

const MainCategoryComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([getCategories()])
      .then((results) => {
        setCategories(results[0]);
      })
      .finally(() => {});
  }, []);

  return (
    <GlobalContainer>
      <Typography
        component="h2"
        variant="h2"
        textAlign="center"
        marginY={4}
        fontSize="clamp(1.8rem, 3vw, 3rem)"
      >
        {HomeLan.mainCategory_Title}
      </Typography>
      <FlexMainCateogry>
        <Grid container marginTop={1}>
          {categories.map((item, index) => {
            return (
              <Grid
                className="category_box"
                xs={3}
                marginBottom={4}
                key={index}
              >
                <Link
                  to={`/category/${item.id}/products`}
                  className="category_box--link"
                >
                  <img src={item.logo} alt="" className="category_box--img" />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </FlexMainCateogry>
    </GlobalContainer>
  );
};

export default MainCategoryComponent;
