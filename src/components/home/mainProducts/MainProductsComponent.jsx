import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Typography } from "@mui/material";

import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainSuggested } from "../mainSuggested_Products/styledMainSuggested";

// import { getSomeProduct, mainProductsSlice } from "./MainProductsSlice";

import bannerImg from "../../../assets/imgs/offer-banner.jpg";
import AllProductsSlide from "../AllProductCart/AllProductsSlide";
import SlideSuggested from "../mainSuggested_Products/slideSuggested";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

// import { HomeLan } from "../../../json/language/fa";

const MainProductsComponent = ({ title }) => {
  // const dispatch = useDispatch();
  // const state = useSelector(() => mainProductsSlice);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getSomeProduct(MAIN_SUGGESTED_PRODUCTS));
  //   }
  // }, [state.length, dispatch]);
  useEffect(() => {
    
  }, []);
  return (
    <GlobalContainer>
      <Typography
        component="h2"
        variant="h2"
        textAlign="center"
        marginTop={5}
        marginBottom={1}
        fontSize="clamp(1.5rem, 3vw, 3rem)"
      >
        {title}
      </Typography>

      <FlexMainSuggested className="rounded-1 hidden p10 gray">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="custom_swiper "
        >
          <SwiperSlide className="slide custom-slide">
            <img className="slide-banner" src={bannerImg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide"><SlideSuggested offer={0} /></SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide"><SlideSuggested offer={0} /></SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide"><SlideSuggested offer={0} /></SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide"><SlideSuggested offer={0} /></SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide"><SlideSuggested offer={0} /></SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <AllProductsSlide link="products" />
          </SwiperSlide>
        </Swiper>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainProductsComponent;
