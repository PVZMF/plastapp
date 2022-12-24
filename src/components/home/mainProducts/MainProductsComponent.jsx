import React, { useEffect, useState } from "react";

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
import { getListMostPopularShops, getListProduct } from "../../../api/api";
import { partialData } from "../../../api/api";
import { baseUrl } from "../../../api/axios";

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
            <img
              className="slide-banner"
              src={
                product?.product_image
                  ? `${baseUrl}${product?.product_image}`
                  : bannerImg
              }
              alt=""
            />
          </SwiperSlide>
          {productsList?.map((item, index) => {
            return (
              <SwiperSlide className="slide p10 custom-slide">
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
          })}
          {/* <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested offer={0} />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested offer={0} />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested offer={0} />
          </SwiperSlide>
          <SwiperSlide className="slide p10 custom-slide">
            <SlideSuggested offer={0} />
          </SwiperSlide> */}
          <SwiperSlide className="slide p10 custom-slide">
            <AllProductsSlide link="/category/all/products" />
          </SwiperSlide>
        </Swiper>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainProductsComponent;
