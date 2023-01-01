// Modules
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import { MainSliderContainer } from "./styledMainSlider";

import { getSliderImage } from "../../../api/api";

import img_2 from "../../../assets/imgs/mainSlider_2.webp";
import { useState } from "react";

const MainSliderComponent = () => {
  const [imgSlider, setImgSlider] = useState([]);
  useEffect(() => {
    Promise.all([getSliderImage()])
      .then((results) => {
        setImgSlider(results[0]);
      })
      .finally(() => {});
  }, []);

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
        modules={[Pagination, Autoplay]}
      >
        {imgSlider.length > 0 ? (
          imgSlider.map((item, i) => {
            return (
              <SwiperSlide className="slide" key={i}>
                <img src={item.image} alt="" />
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide className="slide">
            <img src={img_2} alt="slider" />
          </SwiperSlide>
        )}
      </Swiper>
    </MainSliderContainer>
  );
};

export default MainSliderComponent;
