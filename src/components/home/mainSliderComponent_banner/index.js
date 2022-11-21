// Modules
import React, { useEffect } from "react";

// Hooks
// import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

import { MainSliderContainer } from "./styledMainSlider";
import { getAllSliderImgs, mainSliderImgs } from "./mainSliderSlice";

import { getSliderImage } from "../../../api/api"
// import { MAIN_SLIDER_IMGS } from "../../../../service/homeService";

import img_2 from "../../../assets/imgs/mainSlider_2.webp";
import { useState } from 'react';

const MainSliderComponent = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainSliderImgs);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getAllSliderImgs(MAIN_SLIDER_IMGS));
  //   }
  // }, [state.length, dispatch]);
  const [imgSlider, setImgSlider] = useState([]);
  useEffect(() => {
    // setLoading(true);
    Promise.all([getSliderImage()])
      .then((results) => {
        setImgSlider(results[0]);
      })
      .finally(() => {
        // setLoading(false);
      });
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
        ) :
          <SwiperSlide className="slide">
            <img src={img_2} alt="slider" />
          </SwiperSlide>
        }
      </Swiper>
    </MainSliderContainer>
  );
};

export default MainSliderComponent;