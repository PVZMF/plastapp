import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// Components
import SlideSuggested from "../mainSuggested_Products/slideSuggested";

import { FlexMainSuggested } from "../mainSuggested_Products/styledMainSuggested";

import { Box, Typography } from "@mui/material";
import { GlobalContainer } from "../../../global/styles/globalContainer";
// import { FlexMainPopular } from "./styledMainPopular";

// import { getAllPopular, mainPopularProducts } from "./mainPopularSlice";

import bannerImg from "../../../assets/imgs/box2.webp";
import bannerImg1 from "../../../assets/imgs/offer-banner.jpg";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

import { HomeLan } from "../../../json/language/fa";
import AllProductsSlide from "../AllProductCart/AllProductsSlide";
import {
  amazingListProduct,
  getPopularListProduct,
  partialData,
} from "../../../api/api";
import { baseUrl } from "../../../api/axios";
import { PowerInput } from "@mui/icons-material";
import style from "../mainSuggested_Products/suggested.module.css";

const MainPopularComponent = ({}) => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainPopularProducts);
  // const [amazingProduct, setAmazingProduct] = useState([]);
  const [data, setData] = useState();
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    partialData().then((result) => {
      setData(result.data);
    });

    getPopularListProduct().then((res) => setPopularProducts(res));
  }, []);

  console.log("popular products >>>>", popularProducts);

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
        {HomeLan.mainPopularProducts_title}
      </Typography>
      {/* {console.log(amazingProduct)} */}
      <FlexMainSuggested className="rounded-1 hidden p10 blue">
        <Box sx={{ width: "25%", background: "transparent" }}>
          <img
            src={
              data?.best_seller_image
                ? `${baseUrl}${data?.best_seller_image}`
                : bannerImg
            }
            alt="پیشنهاد ویژه"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
            overflow: "hidden",
          }}
        >
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
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="custom_swiper"
          >
            {popularProducts != null
              ? [...popularProducts].reverse().map((item, index) => (
                  <SwiperSlide
                    className={style.sweeperSlide}
                    key={index + "slidePopularProducts"}
                  >
                    <SlideSuggested
                      image={item.thumbnails}
                      price={item.price}
                      title={item.title}
                      creditSale={item.credit_sale}
                      shopName={item.shop.name}
                      priceWithOffer={item.price_with_offer}
                      id={item.id}
                      inventory={item.inventory}
                    />
                  </SwiperSlide>
                ))
              : ""}
            <SwiperSlide className={style.sweeperSlide}>
              <AllProductsSlide link={"/category/all/products"} />
            </SwiperSlide>
          </Swiper>
          {/* </FlexMainSuggested> */}
        </Box>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainPopularComponent;
