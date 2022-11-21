// Modules
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import {getAllBanners} from "../../../api/api"

import ImageEx1 from "../../../assets/imgs/shop_1.jpg"
import ImageEx2 from "../../../assets/imgs/shop_2.jpg"

import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainNoticeBanner } from "./styledNoticeBanner";


const MainNoticeBannerComponent = ({ row }) => {
  const [images, setImages] = useState([]);
  const [banners,setBanners] = useState([]);
  useEffect(() => {
    // setLoading(true);
    Promise.all([getAllBanners()])
      .then((results) => {
        setBanners(results[0].data);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);
  if (row === 'first') {
    return (
      <GlobalContainer>
        <FlexMainNoticeBanner>
          {
            
            <React.Fragment>
              {console.log(banners)}
              <div className="banner">
                <NavLink to={images.first_row_first_url}>
                  <img
                    className="banner--img"
                    src={banners.first_row_first}
                    alt="alternate text"
                  />
                </NavLink>
              </div>
              <div className="banner">
                <NavLink to={images.first_row_second_url}>
                  <img
                    className="banner--img"
                    src={banners.first_row_second}
                    alt="alternate text"
                  />
                </NavLink>
              </div>
            </React.Fragment>
          }
        </FlexMainNoticeBanner>
      </GlobalContainer>
    );
  }
  return (
    <GlobalContainer>
      <FlexMainNoticeBanner>
        {
          <React.Fragment>
            <div className="banner">
              <NavLink to={banners.second_row_first_url}>
                <img
                  className="banner--img"
                  src={banners?.second_row_first}
                  alt="alternate text"
                />
              </NavLink>
            </div>
            <div className="banner">
              <NavLink to={banners.second_row_second_url}>
                <img
                  className="banner--img"
                  src={banners?.second_row_second}
                  alt="alternate text"
                />
              </NavLink>
            </div>
          </React.Fragment>
        }
      </FlexMainNoticeBanner>
    </GlobalContainer>
  )
};

export default MainNoticeBannerComponent;
