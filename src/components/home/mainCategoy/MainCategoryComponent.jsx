// Modules
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

// import {
//   categoryStatus,
//   getAllCategories,
//   mainCategories,
// } from "./mainCategorySlice";

import { GlobalContainer } from "../../../global/styles/globalContainer";
import { HomeLan } from "../../../json/language/fa";
// import { MAIN_CATEGORIES } from "../../../service/homeService";
import { FlexMainCateogry } from "./styledMainCategory";
// import SkeltonLoader from "../../../components/skeletonLoader/SkeltonLoader";

// images 
import Logo1 from '../../../assets/imgs/1.webp';
import Logo2 from '../../../assets/imgs/2.webp';
import Logo3 from '../../../assets/imgs/3.webp';
import Logo4 from '../../../assets/imgs/4.webp';

// import SkeltonLoader from "../../../components/skeletonLoader/SkeltonLoader";

const MainCategoryComponent = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainCategories);
  // const status = useSelector(categoryStatus);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getAllCategories(MAIN_CATEGORIES));
  //   }
  // }, [state.length, dispatch]);

  return (
    <GlobalContainer style={{ padding: "30px 0px" }}>
      <Typography component="h2" variant="h2" textAlign="center" marginY={4}>
        {HomeLan.mainCategory_Title}
      </Typography>
      <FlexMainCateogry>
        {/* {status === "loading" ? <SkeltonLoader /> : null} */}
        {/* {state.map((item) => {
          return ( */}
            <div className="category_box">
              <Link to={`/category/item.id`} className="category_box--link">
                <img src={Logo1} alt="" className="category_box--img" />
              </Link>
            </div>
            <div className="category_box">
              <Link to={`/category/item.id`} className="category_box--link">
                <img src={Logo2} alt="" className="category_box--img" />
              </Link>
            </div>
            <div className="category_box">
              <Link to={`/category/item.id`} className="category_box--link">
                <img src={Logo3} alt="" className="category_box--img" />
              </Link>
            </div>
            <div className="category_box">
              <Link to={`/category/item.id`} className="category_box--link">
                <img src={Logo4} alt="" className="category_box--img" />
              </Link>
            </div>
          {/* );
        })} */}
      </FlexMainCateogry>
    </GlobalContainer>
  );
};

export default MainCategoryComponent;
