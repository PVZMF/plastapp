import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";

import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainShops } from "./styledMainShops";

import shop1 from "../../../assets/imgs/shop_1.jpg";
import shop2 from "../../../assets/imgs/shop_2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import { getNewListShops } from "../../../api/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useSelect } from "@mui/base";
import { Link } from "react-router-dom";

const MainShopsComponent = ({ title, state }) => {
  const [shops, setShops] = useState([]);
  // ListShop
  useEffect(() => {
    // setLoading(true);
    getNewListShops()
      .then((results) => {
        setShops(results);
        console.log(results);
      })
      .finally(() => {});
  }, []);

  return (
    <GlobalContainer>
      <Typography
        component="h2"
        variant="h2"
        textAlign="center"
        marginY={2}
        fontSize="clamp(1.5rem, 3vw, 3rem)"
      >
        {title}
      </Typography>
      <FlexMainShops>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="custom_swiper rounded-1"
        >
          {shops.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link to={`/shop/${item.id}/products`}>
                  <div className="shop_box">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="shop_box--img"
                    />
                    <div className="shop_box--title p10">{item.name}</div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            {" "}
            <div className="shop_box d_flex--1">
              <img src={shop1} alt="" className="shop_box--img" />
              <div className="shop_box--title p10">shop_2</div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </FlexMainShops>
    </GlobalContainer>
  );
};

export default MainShopsComponent;
