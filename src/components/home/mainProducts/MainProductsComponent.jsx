import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Box, Typography } from "@mui/material";

import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainSuggested } from "../mainSuggested_Products/styledMainSuggested";

// import { getSomeProduct, mainProductsSlice } from "./MainProductsSlice";

import bannerImg from "../../../assets/imgs/box2.webp";
import AllProductsSlide from "../AllProductCart/AllProductsSlide";
import SlideSuggested from "../mainSuggested_Products/slideSuggested";
import { getListMostPopularShops, getListProduct } from "../../../api/api";
import { partialData } from "../../../api/api";
import { baseUrl } from "../../../api/axios";
import style from "../mainSuggested_Products/suggested.module.css";

// import { MAIN_SUGGESTED_PRODUCTS } from "../../../../service/homeService";

// import { HomeLan } from "../../../json/language/fa";

const MainProductsComponent = ({ title }) => {
  const [shops, setShops] = useState([]);
  const [product, setProduct] = useState();
  const [productsList, setProductsList] = useState([]);
  // ListShop
  useEffect(() => {
    // setLoading(true);
    getListMostPopularShops()
      .then((results) => {
        setShops(results);
      })
      .finally(() => {});

    partialData().then((data) => {
      setProduct(data.data);
    });

    getListProduct().then((res) => {
      setProductsList(res);
      console.log("res pouriya", res);
    });
  }, []);

  console.log("products list >>", productsList);
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
      {/* {console.log(amazingProduct)} */}
      <FlexMainSuggested className="rounded-1 hidden p10 gray">
        <Box sx={{ width: "25%", background: "transparent" }}>
          <img
            src={
              product?.product_image
                ? `${baseUrl}${product?.product_image}`
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
            slidesPerView={4}
            spaceBetween={25}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="custom_swiper "
          >
            {productsList?.map((item, index) => {
              if (index <= 4) {
                return (
                  <SwiperSlide
                    className={style.sweeperSlide}
                    key={index + "slideProducts"}
                  >
                    <SlideSuggested
                      offer={item.priceWithOffer}
                      id={item.id}
                      title={item.title}
                      image={item.thumbnails}
                      price={item.price}
                      number={item.inventory}
                      creditSale={item.credit_sale}
                    />
                  </SwiperSlide>
                );
              }
            })}
            <SwiperSlide className={style.sweeperSlide}>
              <AllProductsSlide link="products" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainProductsComponent;
