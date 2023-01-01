// Modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";

// Styling
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import style from "./suggested.module.css";
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
        <Box sx={{ width: "25%" }}>
          <img
            src={
              data.special_suggestion_image
                ? `${baseUrl}${data.special_suggestion_image}`
                : bannerImg
            }
            alt="پیشنهاد ویژه"
          />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "clamp(.8rem, 1.5vw, 1.5rem)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            {data.special_suggestion_text}
          </Typography>
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
              375: {
                slidesPerView: 2,
              },
              // 500: {
              //   slidesPerView: 2,
              // },
              768: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            className="custom_swiper"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
          >
            {[...amazingProduct].reverse().map((item, index) => (
              <SwiperSlide className={style.sweeperSlide} key={index}>
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
            ))}
            <SwiperSlide className="slide p10 custom-slide">
              <AllProductsSlide link={`/category/all/products`} />
            </SwiperSlide>
          </Swiper>
        </Box>
      </FlexMainSuggested>
    </GlobalContainer>
  );
};

export default MainSuggestedComponent;
