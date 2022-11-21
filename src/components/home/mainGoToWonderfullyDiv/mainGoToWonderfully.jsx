import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexWonderfullyContainer } from "./styledMainGoToWonderfully";

import { FlexWonderfullyImage } from "./styledMainGoToWonderfullyImgs";

import { FlexWonderfullyDiv } from "./styledMainGoToWonderfullyDiv";

import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { HomeLan } from "../../../json/language/fa";
import img1 from "../../../assets/imgs/adImgs/ad1.webp";
import img2 from "../../../assets/imgs/adImgs/ad2.webp";
// import {
//   getAllSuggested,
//   mainSuggestedProducts,
// } from "../mainSuggested/mainSuggestedSlice";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

const MainGoToWonderfully = () => {
  //   const dispatch = useDispatch();
  //   const state = useSelector(mainSuggestedProducts);

  //   useEffect(() => {
  //     if (state.length <= 0) {
  //       dispatch(getAllSuggested(MAIN_SUGGESTED_PRODUCTS));
  //     }
  //   }, [state.length, dispatch]);
  const state = [img1, img2];
  return (
    <FlexWonderfullyContainer>
      {state.map((item, i) => {
        return (
          <FlexWonderfullyImage key={i}>
            <NavLink to={`/product/productid`}>
              <img className="img" src={item} alt="product" />
            </NavLink>
          </FlexWonderfullyImage>
        );
      })}
      <FlexWonderfullyDiv>
        <NavLink to={`/product`}>
          <p>
            {HomeLan.mainWonderfullyDiscountProducts_title}
            <br />
            {HomeLan.mainWonderfullyDiscountProducts_title_continue}
            <ArrowBackIcon className="arrow" />
          </p>
        </NavLink>
      </FlexWonderfullyDiv>
    </FlexWonderfullyContainer>
  );
};

export default MainGoToWonderfully;
