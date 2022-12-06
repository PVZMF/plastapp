// Modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";

// Styling
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// Components
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainSuggested } from "./styledMainSuggested";
import AllProductsSlide from "../AllProductCart/AllProductsSlide";
// import { getAllSuggested, mainSuggestedProducts } from "./mainSuggestedSlice";

// Assets
import bannerImg from "../../../assets/imgs/offer-banner.jpg";
import SlideSuggested from "./slideSuggested";
import { Navigation } from "swiper";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";
// import { HomeLan } from "../../../../json/language/fa";
import AllProducts from "../AllProductCart/AllProductsSlide";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../api/axios";
import { getAmazingListProduct } from "../../../api/api";
import { partialData } from "../../../api/api";

const MainSuggestedComponent = ({ title }) => {
  const [amazingProduct, setAmazingProduct] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getAmazingListProduct()
      .then((res) => {
        setAmazingProduct(res);
      })
      .finally(() => {});

    partialData()
      .then((res) => {
        setData(res.data);
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
        {title}
      </Typography>
      {console.log(amazingProduct)}
      <FlexMainSuggested className="rounded-1 hidden p10">
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            868: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          className="custom_swiper"
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide className="slide custom-slide">
            <img
              className="slide-banner"
              src={
                data.special_suggestion_image
                  ? `${baseUrl}${data.special_suggestion_image}`
                  : bannerImg
              }
              alt="پیشنهاد ویژه"
            />
            <Typography>{data.special_suggestion_text}</Typography>
          </SwiperSlide>
          {amazingProduct.map((item, index) => (
            <SwiperSlide className="slide p10 custom-slide" key={index}>
              <Link to={`products/${index + 1}`}>
                <SlideSuggested
                  image={item.thumbnails}
                  price={title.price}
                  title={item.title}
                />
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
