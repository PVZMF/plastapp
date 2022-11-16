// Modules
import React, { useEffect } from "react";

// Hooks

import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

import { MainSliderContainer } from "./styledMainSlider";


import img_2 from "../../../assets/imgs/mainSlider_2.webp";

const MainSliderComponent = () => {

  return (
    <MainSliderContainer>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {/* {state.length > 0 ? (
          state.map((item, i) => {
            return (
              <SwiperSlide className="slide" key={i}>
                <img src={item.image} alt="" />
              </SwiperSlide>
            );
          })
        ) : ( */}
          <SwiperSlide className="slide">
            <img src={img_2} alt="slider" />
          </SwiperSlide>
         {/* )} */}
      </Swiper>
    </MainSliderContainer>
  );
};

export default MainSliderComponent;