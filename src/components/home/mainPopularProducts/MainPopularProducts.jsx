import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { FlexMainSuggested } from "../mainSuggested/styledMainSuggested";

import { Typography } from "@mui/material";

import { GlobalContainer } from "../../../global/styles/globalContainer";
// import { FlexMainPopular } from "./styledMainPopular";

// import { getAllPopular, mainPopularProducts } from "./mainPopularSlice";

import bannerImg from "../../../assets/imgs/box2.webp";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

import { HomeLan } from "../../../json/language/fa";

const MainPopularComponent = ({}) => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainPopularProducts);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     // dispatch(getAllPopular(MAIN_SUGGESTED_PRODUCTS));
  //   }
  // }, [state.length, dispatch]);

  return (
    <GlobalContainer>
      <Typography component="h2" variant="h2" textAlign="center" marginY={4}>
        {HomeLan.mainPopularProducts_title}
      </Typography>

      <FlexMainSuggested className="rounded-1 hidden p10 blue">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            }
          }}
          spaceBetween={10}
          className="custom_swiper "
        >
          <SwiperSlide className="slide custom-slide"><img className="slide-banner" src={bannerImg} alt=""/></SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 2</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 3</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 4</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 5</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 6</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 7</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 8</SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">Slide 9</SwiperSlide>
        </Swiper>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainPopularComponent;
