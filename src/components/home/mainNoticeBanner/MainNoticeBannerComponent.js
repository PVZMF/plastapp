// Modules
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { getAllBanners } from "../../../api/api";

import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainNoticeBanner } from "./styledNoticeBanner";

const MainNoticeBannerComponent = ({ row }) => {
  const [images, setImages] = useState([]);
  const [banners, setBanners] = useState([]);
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
  if (row === "first") {
    return (
      <GlobalContainer>
        <FlexMainNoticeBanner>
          {
            <React.Fragment>
              <div className="banner">
                <a href={banners.first_row_first_url} target="_blank">
                  <img
                    className="banner--img"
                    src={banners?.first_row_first}
                    alt="alternate text"
                  />
                </a>
              </div>
              <div className="banner">
                <a href={banners.first_row_second_url} target="_blank">
                  <img
                    className="banner--img"
                    src={banners?.first_row_second}
                    alt="alternate text"
                  />
                </a>
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
              <a href={banners?.second_row_first_url} target="_blank">
                <img
                  className="banner--img"
                  src={banners?.second_row_first}
                  alt="alternate text"
                />
              </a>
            </div>
            <div className="banner">
              <a href={banners?.second_row_second_url} target="_blank">
                <img
                  className="banner--img"
                  src={banners?.second_row_second}
                  alt="alternate text"
                />
              </a>
            </div>
          </React.Fragment>
        }
      </FlexMainNoticeBanner>
    </GlobalContainer>
  );
};

export default MainNoticeBannerComponent;
