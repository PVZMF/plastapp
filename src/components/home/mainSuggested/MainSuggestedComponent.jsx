// Modules
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";

// Styling
import "swiper/css";
import "swiper/css/pagination";
import './styles.css'

// Components
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainSuggested } from "./styledMainSuggested";
// import { getAllSuggested, mainSuggestedProducts } from "./mainSuggestedSlice";

// Assets
import bannerImg from "../../../assets/imgs/offer-banner.jpg";
import SlideSuggested from "./slideSuggested";


// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";
// import { HomeLan } from "../../../../json/language/fa";





const MainSuggestedComponent = ({ title }) => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainSuggestedProducts);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     // dispatch(getAllSuggested(MAIN_SUGGESTED_PRODUCTS));
  //   }
  // }, [state.length, dispatch]);

  return (
    <GlobalContainer>
      <Typography component="h2" variant="h2" textAlign="center" marginY={4}>
        {title}
      </Typography>

      <FlexMainSuggested className="rounded-1 hidden p10">
        <Swiper
          breakpoints={{
            200: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            }
          }}
          spaceBetween={10}
          className="custom_swiper"
        >
          <SwiperSlide className="slide custom-slide">
          <img className="slide-banner" src={bannerImg} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested />
          </SwiperSlide>
        </Swiper>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainSuggestedComponent;
