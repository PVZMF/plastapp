// Modules
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";

// Styling
import "swiper/css";
import "swiper/css/navigation";
import './styles.css'

// Components
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainSuggested } from "./styledMainSuggested";
import AllProductsSlide from "../AllProductCart/AllProductsSlide"
// import { getAllSuggested, mainSuggestedProducts } from "./mainSuggestedSlice";

// Assets
import bannerImg from "../../../assets/imgs/offer-banner.jpg";
import SlideSuggested from "./slideSuggested";
import { Navigation} from "swiper";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";
// import { HomeLan } from "../../../../json/language/fa";
import AllProducts from '../AllProductCart/AllProductsSlide';
import { Autoplay } from 'swiper';
import { Link } from "react-router-dom";





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
      <Typography component="h2" variant="h2" textAlign="center" marginY={4} fontSize="clamp(1.8rem, 3vw, 3rem)">
        {title}
      </Typography>

      <FlexMainSuggested className="rounded-1 hidden p10">
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            868: {
              slidesPerView: 4
            }
          }}
          spaceBetween={10}
          className="custom_swiper"
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Navigation,Autoplay]}
        >
          <SwiperSlide className="slide custom-slide">
            <img className="slide-banner" src={bannerImg} alt="پیشنهاد ویژه"/>
          </SwiperSlide>
          <SwiperSlide className="slide custom-slide">
            <img className="slide-banner" src={bannerImg} alt="پیشنهاد ویژه" />
          </SwiperSlide>
          {[...Array(9)].map((item, index) => (
            <SwiperSlide className="slide p10 custom-slide" key={index}>
              <Link to={`products/${index + 1}`}>
                <SlideSuggested />
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide className="slide p10 custom-slide">
            <AllProductsSlide />
          </SwiperSlide>
        </Swiper>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainSuggestedComponent;
